import {
	Directive,
	HostListener,
	Inject,
	forwardRef
} from "@angular/core";

import { TinyMCEComponent } from "./tinymce.component";

import {
	ControlValueAccessor,
	NG_VALUE_ACCESSOR
} from "@angular/forms";

@Directive({
	selector: "tinymce[ngModel],tinymce[formControl],tinymce[formControlName]",
	providers : [{provide: NG_VALUE_ACCESSOR, useExisting: TinyMCEValueAccessor, multi: true}]
})
export class TinyMCEValueAccessor implements ControlValueAccessor {

	onChange = (_) => {};
	onTouched = () => {};

	constructor(private host: TinyMCEComponent) { }

	writeValue(value: string): void {
		this.host.setContent(value);
	}

	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	@HostListener("blur", [])
	private onBlur() {
		this.onTouched();
	}

	@HostListener("contentChange", ["$event.value"])
	private onContentChanged(value) {
		this.onChange(value);
	}

}