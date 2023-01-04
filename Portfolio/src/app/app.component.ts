import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Portfolio';

  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(['en', 'fr', 'jp']);
    translate.setDefaultLang('fr');
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
