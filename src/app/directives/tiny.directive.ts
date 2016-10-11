import {
	Directive,
	OnDestroy,
	AfterViewInit,
	Provider,
	forwardRef,
	HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';
import 'rxjs/add/operator/let';

declare var tinymce: any;

export const TinyMceValueAccessor: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TinyMceDirective),
	multi: true
};

// Tinymce directive
@Directive({
	selector: '[htmlEditor]',
	providers: [TinyMceValueAccessor]
})

export class TinyMceDirective implements OnDestroy,  ControlValueAccessor {
	static nextUniqueId = 0;
	@HostBinding('attr.data-tinymce-uniqueid') uniqueId;

	onTouchedCallback: () => void = () => { };
	onChangeCallback: (_: any) => void = () => { };
	innerValue;
	subscribe$: Subscription
	init = false;

	constructor(private sanitizer: DomSanitizer, store: Store<fromRoot.State>) {
		this.uniqueId = `tinymce-host-${TinyMceDirective.nextUniqueId++}`;

		this.subscribe$ = store.let(fromRoot.getActiveEditor)
			.subscribe(data => {
				this.init = data

				if (this.init) {
					tinymce.init({
						selector: `[data-tinymce-uniqueid=${this.uniqueId}]`,
						schema: 'html5',
						setup: (ed) => {
							ed.on('init', (ed2) => {
								if (this.innerValue) ed2.target.setContent(this.innerValue);
							});
						},
						plugins: [
							"advlist autolink lists link image charmap print preview anchor",
							"searchreplace visualblocks code fullscreen",
							"insertdatetime media table contextmenu paste"
						],
						toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
					});

					console.log(tinymce.Editor);
				}
			});
	}

	//get accessor
	get value(): any {
		return this.innerValue;
	};

	//set accessor including call the onchange callback
	set value(v: any) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChangeCallback(v);
		}
	}

	updateValue() {
		const content = tinymce.activeEditor.getContent();
		this.value = this.sanitizer.bypassSecurityTrustHtml(content);
	}

	writeValue(value): void {
		if (value !== this.innerValue) {
			this.innerValue = value;
			if (this.init && value) tinymce.activeEditor.setContent(value);
		}
	}

	registerOnChange(fn): void {
		console.log(this.value)
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn): void {
		this.onTouchedCallback = fn;
	}

	ngOnDestroy(): void {
		if (this.init) tinymce.remove(`[data-tinymce-uniqueid=${this.uniqueId}]`);

		this.subscribe$.unsubscribe();
	}
}