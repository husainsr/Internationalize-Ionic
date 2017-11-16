import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  textDir: string = "ltr";
    constructor(public splashScreen: SplashScreen,public platform: Platform,public statusBar: StatusBar,public translate: TranslateService) {
  
      
      let lan= localStorage.getItem("language") ;
      if(lan)
      {
        translate.setDefaultLang(lan);
        translate.use(lan);

        if(localStorage.getItem("language") == "ar")
        {
          this.textDir = 'rtl';
        }
      }
      else
      {
        translate.setDefaultLang('en');
        translate.use('en');
      }

     
  
      platform.ready().then(() => {
  

        this.rootPage = HomePage;
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();

        this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
        {
          this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
        });
        splashScreen.hide();
      });
  
     
  
    }
}

