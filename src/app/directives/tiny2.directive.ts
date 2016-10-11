import {
	Directive,
	OnDestroy,
	AfterViewInit,
	Provider,
	forwardRef,
	HostBinding,
	Input
} from '@angular/core';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers';
import 'rxjs/add/operator/let';

 const TinyMceValueAccessor: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TinyMceDirective),
	multi: true
};

@Directive({
	selector: 'textarea[tinymce]',
	host: { '(keyup)': 'doOnChange($event.target)' },
	providers: [TinyMceValueAccessor]
})

export class TinyMceDirective extends DefaultValueAccessor {
	@Input()tinymce: any;

	onChange = (_) => { };
	onTouched = () => { };

	writeValue(value: any): void {
		if (value != null) {
			super.writeValue(value.toString());
		}
	}

	doOnChange(elt) {
		this.onChange(this.tinymce.activeEditor.getContent());
	}
}