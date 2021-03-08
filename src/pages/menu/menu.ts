import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Category } from '../../models/interface-category';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
rootPage : any;
categorie : Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categorie =[
      {
        title :'Vetements',
        description :'description',
        icon : 'shirt'

      },
      {
        title :'appareil mobile',
        description :'description',
        icon : 'phone-portrait'

      },
      {
        title :'PC',
        description :'description',
        icon : 'computers'

      },
      {
        title :'tennis',
        description :'description',
        icon : 'archive'

      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
