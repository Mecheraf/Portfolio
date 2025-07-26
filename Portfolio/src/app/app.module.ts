import { NgModule, TransferState } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SwitchLanguageComponent } from './shared/switch-language/switch-language.component';
import { SocialNetworksComponent } from './shared/social-networks/social-networks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { AnnisrayanbourefisComponent } from './easters/annisrayanbourefis/annisrayanbourefis.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        ExperiencesComponent,
        TrainingsComponent,
        ProjectsComponent,
        ContactComponent,
        MainComponent,
        SwitchLanguageComponent,
        SocialNetworksComponent,
        BodyComponent,
        AnnisrayanbourefisComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        CountdownModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslaterLoader,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

export function httpTranslaterLoader(http: HttpClient){
  return new TranslateHttpLoader(http);
}
