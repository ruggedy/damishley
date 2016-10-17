import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ng2PaginationModule } from 'ng2-pagination';
import { PipesModule } from '../../pipes';
import { CarouselModule } from 'primeng/primeng';
import { CategoryComponent } from './category/category.component';
import { TagsComponent } from './tags/tags.component';
import { TinyMCEComponent } from './tinymce/tinymce.component';
import { TinyMCEValueAccessor } from './tinymce/tinymce.valueaccessor';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ClipboardDirective } from './image-upload/clipboard.directive';
import { TitleComponent } from './title/title.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemListComponent } from './post-item-list/post-item-list.component';
import { Md2AccordionTab } from './accordion/accordiontab';
import { Md2Accordion } from './accordion/accordionpanel';
import { SidePanelComponent } from './side-panel/side-panel.component';


export const COMPONENTS = [
	CategoryComponent,
	TagsComponent,
	TinyMCEComponent,
	TinyMCEValueAccessor,
	ImageUploadComponent,
	ClipboardDirective,
	TitleComponent,
	PostItemComponent,
	PostItemListComponent,
	Md2Accordion,
	Md2AccordionTab, 
	SidePanelComponent
];


@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule,
		PipesModule,
		CarouselModule,
		Ng2PaginationModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})

export class AdminComponentsModule { }
