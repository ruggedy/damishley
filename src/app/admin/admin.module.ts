import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { PostComponent } from './containers/post/post.component';
import { AdminRoutingModule } from './admin.routes';
import { MaterialModule } from '@angular/material';
import { AccordionModule } from 'primeng/primeng';
import { NgSemanticModule } from 'ng-semantic';

import { AdminComponentsModule } from './components';


@NgModule({
  imports: [
    CommonModule,  
    AdminRoutingModule, 
    MaterialModule, 
    AccordionModule,
    NgSemanticModule,
	AdminComponentsModule
    ],
  declarations: [
    AdminComponent, 
    PostComponent,
    ],
  providers: [
    ]

})

export class AdminModule { }

