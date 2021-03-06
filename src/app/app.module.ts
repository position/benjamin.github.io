import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

import { CreateGeometryService } from './service/create-geometry.service';
import { SceneService } from './service/scene.service';
import { ResizeDirective } from './directive/resize.directive';
import { DatGuiDirective } from './directive/dat-gui.directive';
import { AudioComponent } from './audio/audio.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto'
};

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
		IntroductionComponent,
		PortfolioComponent,
		ContactComponent,
		ResizeDirective,
		DatGuiDirective,
		AudioComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		SwiperModule
	],
	providers: [
		CreateGeometryService,
		SceneService,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
