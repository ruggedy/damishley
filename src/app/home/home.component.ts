import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarComponent, BlogService } from '../shared/index';
import { CarouselComponent } from '../header/index';
import { NgSemanticModule } from 'ng-semantic';
import { SharedModule } from 'primeng/primeng';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  categories: any;
  navSwitchValue: boolean = false;
  toggleTracker: boolean = false;
  @ViewChild("sideNav")sideNav:any;
  constructor(private _blogService: BlogService) {
   
  }

  navValue(value: boolean){
      this.sideNav.show({transition: 'slide along'});
  }

  ngOnInit(){
    this._blogService.getCategories()
        .subscribe(
            data => {
              this.categories = data.obj;
              console.log(data.obj);
            }
        )
  }

}
