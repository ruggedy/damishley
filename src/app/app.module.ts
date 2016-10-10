import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PrivateSharedModule } from './shared/shared.module';
import { MaterialModule } from '@angular/material';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';

import { PostService, ImageUploadService } from './shared'



import { reducer } from './reducers';
import { PostEffects } from './effects/post';


// store imports

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AppRoutingModule,
		PrivateSharedModule,
		HomeModule,
		AdminModule,

		StoreModule.provideStore(reducer),

		StoreDevtoolsModule.instrumentStore({
			monitor: useLogMonitor({
				visible: true,
				position: 'right'
			})
		}),

		StoreLogMonitorModule,
		EffectsModule.run(PostEffects)
	],
	providers: [
		PostService,
		ImageUploadService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
