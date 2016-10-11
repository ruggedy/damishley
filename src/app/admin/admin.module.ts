import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { PostComponent } from './post/post.component';
import { TagsComponent } from './tags/tags.component';
import { CategoryComponent } from './category/category.component';
import { PrivateSharedModule } from '../shared/shared.module';
import { MdGridListModule } from '@angular/material/grid-list';
import { AdminRoutingModule } from './admin.routes'
import { PostService, ImageUploadService } from '../shared/index';
import { CKEditorModule } from 'ng2-ckeditor';
import { MdRadioModule } from '@angular/material/radio';
import { MdCheckboxModule } from '@angular/material/checkbox';
import { AccordionModule, EditorModule } from 'primeng/primeng';
import { NgSemanticModule } from 'ng-semantic';
import { TinyMCEComponent } from './tinymce/tinymce.component';
import { TinyMCEValueAccessor} from './tinymce/tinymce.valueaccessor';


@NgModule({
  imports: [
    CommonModule, 
    PrivateSharedModule,  
    AdminRoutingModule, 
    MdGridListModule,
  	CKEditorModule, 
    MdRadioModule, 
    MdCheckboxModule, 
    AccordionModule,
    NgSemanticModule,
	EditorModule
    ],
  declarations: [
    AdminComponent, 
    PostComponent, 
    CategoryComponent, 
    TagsComponent,
	TinyMCEComponent,
	TinyMCEValueAccessor
    ],
  providers: [
    PostService, 
    ImageUploadService
    ]

})

export class AdminModule { }

