import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product, Availability } from '../../models/interface-products';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker';

/**
 * Generated class for the CreateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
myProduct : Product;
categories = [];
cities = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public imagePicker : ImagePicker) {
    this.myProduct = {} as Product;
    this.myProduct.availability = {} as Availability;
    this.myProduct.pictures = [];
    this.cities = [
      {
        name : "Antananarivo"
      },
      {
        name : "Toliara"
      },
      {
        name : "Tamatave"
      },
      {
        name : "Mahajanga"
      },
      {
        name : "Fianarantsoa"
      },
      {
        name : "Diego"
      },
    ];
    this.categories = [
      {
        title : " Vetements"
      },
      {
        title : " Tennis"
      },
      {
        title : " Telephone"
      },
      {
        title : " PC"
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }
  create(myProduct : Product) {
    myProduct.id = '5';
    myProduct.createdAt = new Date();
    myProduct.averageStar = 1;
    myProduct.availability.available = true;
    console.log('myProduct = ', myProduct);
  }

  pickImages() {
    let options : ImagePickerOptions = {
      maximumImagesCount : 4,
      outputType : OutputType.FILE_URL
    }
    this.imagePicker.getPictures(options)
    .then((results)=>{
      console.log('Images =', results );
      this.myProduct.pictures= results;

    })
    .catch((error)=>console.log('Erreur',error))
  }

}
