import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Clipboard } from '@angular/cdk/clipboard';




@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent implements OnInit {
  email:string = "alan.mecheraf@gmail.com"
  constructor(public translate: TranslateService, public clipboard: Clipboard) {
    translate.addLangs(['en', 'fr', 'jp']);
    translate.setDefaultLang('fr');
    this.translate.currentLang = 'fr'
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
    console.log(this.translate.currentLang)
  }

  ngOnInit(): void {
  }

  public copyToClipboard(): void {
    const successful = this.clipboard.copy(this.email)
  }

}
