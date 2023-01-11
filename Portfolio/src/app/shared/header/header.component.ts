import { Component, OnInit, ChangeDetectorRef, HostListener, ElementRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showMobileMenu: boolean = false;
  public isMobile: boolean = false;

  constructor(public translate: TranslateService, private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getWindowSize();
    this.cdRef.detectChanges();
  }

  openMenu() {
    this.showMobileMenu = true;
  }

  closeMenu() {
    this.showMobileMenu = false;
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }

  getWindowSize() {
    this.isMobile = window.innerWidth < 768;
  }


}
