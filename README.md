# Portfolio
My portfolio as an online resume. Made from scratch with Angular.

## Installation

1. Clone the Repository 

```bash
git clone https://github.com/Mecheraf/Portfolio.git
cd Portfolio/Portfolio
```
2. Install dependencies:

```bash
npm i 
```

## Script and use

- To start the application in development mode:

```bash
ng serve
```

In a brower, go to http://localhost:4200/

## Directory structure

```bash
Portfolio
├── README.md
├── angular.json
├── dist
│   └── portfolio
│       ├── Lato-Bold.ttf
│       ├── Lato-Italic.ttf
│       ├── Lato-Light.ttf
│       ├── Lato-Regular.ttf
│       ├── Lato-Thin.ttf
│       ├── PPMori-Regular.otf
│       ├── assets
│       │   ├── css
│       │   │   └── fonts.css
│       │   ├── files
│       │   │   ├── CV-en.pdf
│       │   │   ├── CV-fr.pdf
│       │   │   └── CV-jp.pdf
│       │   ├── fonts
│       │   │   ├── Lato
│       │   │   │   ├── Lato-Black.ttf
│       │   │   │   ├── Lato-BlackItalic.ttf
│       │   │   │   ├── Lato-Bold.ttf
│       │   │   │   ├── Lato-BoldItalic.ttf
│       │   │   │   ├── Lato-Italic.ttf
│       │   │   │   ├── Lato-Light.ttf
│       │   │   │   ├── Lato-LightItalic.ttf
│       │   │   │   ├── Lato-Regular.ttf
│       │   │   │   ├── Lato-Thin.ttf
│       │   │   │   └── Lato-ThinItalic.ttf
│       │   │   ├── PPEiko
│       │   │   │   ├── ppeiko-heavy.otf
│       │   │   │   ├── ppeiko-medium.otf
│       │   │   │   └── ppeiko-thin.otf
│       │   │   ├── PPMori
│       │   │   │   ├── PPMori-Extralight.otf
│       │   │   │   ├── PPMori-ExtralightItalic.otf
│       │   │   │   ├── PPMori-Regular.otf
│       │   │   │   ├── PPMori-RegularItalic.otf
│       │   │   │   ├── PPMori-SemiBold.otf
│       │   │   │   └── PPMori-SemiBoldItalic.otf
│       │   │   └── fangsong
│       │   │       └── fangsong-std.ttf
│       │   ├── i18n
│       │   │   ├── en.json
│       │   │   ├── fr.json
│       │   │   └── jp.json
│       │   └── images
│       │       ├── MobileApp1.png
│       │       ├── MobileApp2.png
│       │       ├── MobileApp3.png
│       │       ├── arrow_main.svg
│       │       ├── bg-lines.svg
│       │       ├── catherinethanhome.png
│       │       ├── catherinethanmobile.jpg
│       │       ├── close.svg
│       │       ├── experience_arrow.svg
│       │       ├── gengoffeehome.png
│       │       ├── gengoffeemobile.jpg
│       │       ├── git.svg
│       │       ├── go-up-button.svg
│       │       ├── hamburger-menu.svg
│       │       ├── insta.svg
│       │       ├── internet-logo.svg
│       │       ├── lines.svg
│       │       ├── linkedin.svg
│       │       ├── logo-gengoffee.png
│       │       ├── photo-portfolio.png
│       │       ├── photo2.jpg
│       │       ├── skills_arrow.svg
│       │       └── training_arrow.svg
│       ├── fangsong-std.ttf
│       ├── favicon.ico
│       ├── index.html
│       ├── main.js
│       ├── main.js.map
│       ├── polyfills.js
│       ├── polyfills.js.map
│       ├── ppeiko-heavy.otf
│       ├── ppeiko-medium.otf
│       ├── ppeiko-thin.otf
│       ├── runtime.js
│       ├── runtime.js.map
│       ├── styles.css
│       ├── styles.css.map
│       ├── vendor.js
│       └── vendor.js.map
├── karma.conf.js
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── about
│   │   │   ├── about.component.html
│   │   │   ├── about.component.scss
│   │   │   ├── about.component.spec.ts
│   │   │   └── about.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── contact
│   │   │   ├── contact.component.html
│   │   │   ├── contact.component.scss
│   │   │   ├── contact.component.spec.ts
│   │   │   └── contact.component.ts
│   │   ├── experiences
│   │   │   ├── experiences.component.html
│   │   │   ├── experiences.component.scss
│   │   │   ├── experiences.component.spec.ts
│   │   │   └── experiences.component.ts
│   │   ├── main
│   │   │   ├── main.component.html
│   │   │   ├── main.component.scss
│   │   │   ├── main.component.spec.ts
│   │   │   └── main.component.ts
│   │   ├── projects
│   │   │   ├── projects.component.html
│   │   │   ├── projects.component.scss
│   │   │   ├── projects.component.spec.ts
│   │   │   └── projects.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── header
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   ├── header.component.spec.ts
│   │   │   │   └── header.component.ts
│   │   │   ├── social-networks
│   │   │   │   ├── social-networks.component.html
│   │   │   │   ├── social-networks.component.scss
│   │   │   │   ├── social-networks.component.spec.ts
│   │   │   │   └── social-networks.component.ts
│   │   │   └── switch-language
│   │   │       ├── switch-language.component.html
│   │   │       ├── switch-language.component.scss
│   │   │       ├── switch-language.component.spec.ts
│   │   │       └── switch-language.component.ts
│   │   └── trainings
│   │       ├── trainings.component.html
│   │       ├── trainings.component.scss
│   │       ├── trainings.component.spec.ts
│   │       └── trainings.component.ts
│   ├── assets
│   │   ├── css
│   │   │   └── fonts.css
│   │   ├── files
│   │   │   ├── CV-en.pdf
│   │   │   ├── CV-fr.pdf
│   │   │   └── CV-jp.pdf
│   │   ├── fonts
│   │   │   ├── Lato
│   │   │   │   ├── Lato-Black.ttf
│   │   │   │   ├── Lato-BlackItalic.ttf
│   │   │   │   ├── Lato-Bold.ttf
│   │   │   │   ├── Lato-BoldItalic.ttf
│   │   │   │   ├── Lato-Italic.ttf
│   │   │   │   ├── Lato-Light.ttf
│   │   │   │   ├── Lato-LightItalic.ttf
│   │   │   │   ├── Lato-Regular.ttf
│   │   │   │   ├── Lato-Thin.ttf
│   │   │   │   └── Lato-ThinItalic.ttf
│   │   │   ├── PPEiko
│   │   │   │   ├── ppeiko-heavy.otf
│   │   │   │   ├── ppeiko-medium.otf
│   │   │   │   └── ppeiko-thin.otf
│   │   │   ├── PPMori
│   │   │   │   ├── PPMori-Extralight.otf
│   │   │   │   ├── PPMori-ExtralightItalic.otf
│   │   │   │   ├── PPMori-Regular.otf
│   │   │   │   ├── PPMori-RegularItalic.otf
│   │   │   │   ├── PPMori-SemiBold.otf
│   │   │   │   └── PPMori-SemiBoldItalic.otf
│   │   │   └── fangsong
│   │   │       └── fangsong-std.ttf
│   │   ├── i18n
│   │   │   ├── en.json
│   │   │   ├── fr.json
│   │   │   └── jp.json
│   │   └── images
│   │       ├── MobileApp1.png
│   │       ├── MobileApp2.png
│   │       ├── MobileApp3.png
│   │       ├── arrow_main.svg
│   │       ├── bg-lines.svg
│   │       ├── catherinethanhome.png
│   │       ├── catherinethanmobile.jpg
│   │       ├── close.svg
│   │       ├── experience_arrow.svg
│   │       ├── gengoffeehome.png
│   │       ├── gengoffeemobile.jpg
│   │       ├── git.svg
│   │       ├── go-up-button.svg
│   │       ├── hamburger-menu.svg
│   │       ├── insta.svg
│   │       ├── internet-logo.svg
│   │       ├── lines.svg
│   │       ├── linkedin.svg
│   │       ├── logo-gengoffee.png
│   │       ├── photo-portfolio.png
│   │       ├── photo2.jpg
│   │       ├── skills_arrow.svg
│   │       └── training_arrow.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```