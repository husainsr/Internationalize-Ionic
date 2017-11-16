import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  select_Language: string;
  constructor(public navCtrl: NavController,public alrtCtrl: AlertController,public translate: TranslateService) {


    this.translate.get('SELECT_LANGUAGE').subscribe(res => {
      this.select_Language = res;
    });


  
  }







  gotolanguage() {
    let alert = this.alrtCtrl.create();
    //alert = this.alrtCtrl.create();
    alert.setTitle(this.select_Language);
    alert.addInput({type: 'radio', label: 'English', value: 'en'});
    alert.addInput({type: 'radio', label: 'Spanish', value: 'es'});
    alert.addInput({type: 'radio', label: 'Arabic', value: 'ar'});
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        alert.dismiss();
        console.log("----------------"+data);
          localStorage.setItem("language",data);
          this.translate.setDefaultLang(data);
          this.translate.use(data);         
        return false;
      }
    });

     alert.present(alert);
  }

}
