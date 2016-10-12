import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes';
import { CarouselModule } from 'primeng/primeng';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { TinyMCEComponent } from './tinymce/tinymce.component';
import { TinyMCEValueAccessor } from './tinymce/tinymce.valueaccessor';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ClipboardDirective } from './image-upload/clipboard.directive';
import { TitleComponent } from './title/title.component';


export const COMPONENTS = [
	CategoryComponent,
	TagsComponent,
	TinyMCEComponent,
	TinyMCEValueAccessor,
	ImageUploadComponent,
	ClipboardDirective,
	TitleComponent,
];


@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule,
		PipesModule,
		CarouselModule,
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})

export class AdminComponentsModule { }
