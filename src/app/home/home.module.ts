import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateSharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routing } from './home.routes';
import { BlogService, WordPipe, ArrayPipe } from '../shared/index';
import { MdCardModule } from '@angular/material/card';
import { MdGridListModule } from '@angular/material/grid-list';
import { NgSemanticModule } from 'ng-semantic';
import { SharedModule, AccordionModule } from 'primeng/primeng';
import { InitialPageComponent, FeaturedPostComponent, SideComponent, CarouselComponent, PostItemsComponent } from './index';

@NgModule({
  imports: [
    CommonModule, 
    PrivateSharedModule, 
    SharedModule, 
    routing,  
    MdCardModule, 
    MdGridListModule, 
    NgSemanticModule, 
    AccordionModule
    ],
  declarations: [
    HomeComponent, 
    CarouselComponent, 
    InitialPageComponent, 
    FeaturedPostComponent, 
    PostItemsComponent, 
    SideComponent, 
    WordPipe, ArrayPipe
    ],
  providers: [
    BlogService
    ]
})
export class HomeModule { }
