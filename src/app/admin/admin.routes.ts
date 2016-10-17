import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PostComponent } from './containers/post/post.component';
import { ViewSelectedPostComponent } from './containers/view-selected-post/view-selected-post.component';
import { AllPostComponent } from './containers/all-post/all-post.component';

export const AdminRoutes: Route[] = [
  
  {
    path: 'admin',
    component: AdminComponent,
	children: [
		{
			path: '',
			component: AllPostComponent
		},
		{
			path: 'edit/:id',
			component: ViewSelectedPostComponent

		},
		{
			path: 'create',
			component: PostComponent
		}
	]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule],
  providers: []
})

export class AdminRoutingModule { }

