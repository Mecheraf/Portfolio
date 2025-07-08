import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'Portfolio';

  constructor(
    public translate: TranslateService,
    private meta: Meta
  ){
    translate.addLangs(['en', 'fr', 'jp']);
    translate.setDefaultLang('fr');

    this.meta.addTag({
      name: 'title',
      content: 'Alan Mecheraf - Portfolio'
    });
    
    this.meta.addTag({
      name: 'description',
      content: 'Alan Mecheraf; DevOps, Développeur web et mobile expérimenté. Président de l\'association franco-japonaise Gengoffee.'
    });
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }
}
