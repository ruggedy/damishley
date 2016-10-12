import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PostComponent } from './containers/post/post.component';

export const AdminRoutes: Route[] = [
  
  {
    path: 'admin',
    component: AdminComponent,
	children: [
		{
			path: '',
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

