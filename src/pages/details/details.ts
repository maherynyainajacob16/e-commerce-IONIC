import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions,ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import {Storage} from '@ionic/storage';
import { itemCart } from '../../models/interface-itemCart';
import { CartPage } from '../cart/cart';
import { MethodProvider } from '../../providers/method/method';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  productDetails : Product;
  nom :String;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public toast : ToastController,
    public modal : ModalController,
    public method : MethodProvider) {
      
  this.productDetails = this.navParams.get("data");
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  goBack() : void{
    this.navCtrl.pop();
  }


  addToCart( productDetails: Product) : void {
   let added : boolean = false;
   //si vide
   this.storage.get("Cart").then((data: itemCart[])=>{
     if(data === null || data.length===0){
       data = [];
       data.push({
         item : productDetails,
         qty : 1,
         amount : productDetails.price
       })
     }
     else{
       //si n'est pas vide
       for (let i=0 ; i> data.length ; i++){
         const element : itemCart = data[i];
         if (productDetails.id === element.item.id){
          element.qty += 1;
          element.amount += productDetails.price; 
          added = true;
         }
       }
       if(!added){
         //pas vide et pas d'article
         data.push({
           item : productDetails,
           qty : 1,
           amount : productDetails.price,

         })
       }
     }
     this.storage.set("Cart", data)
     .then(data =>{
      let options : ToastOptions ={
        message : "votre panier a été mis a jour",
        duration : 122500,
        showCloseButton :true,
        closeButtonText :"Fermer",
      };
      this.toast.create(options).present();
     })
     .catch(err => {
       console.log("Erreur",err);
     })
   })
  }

  openCart() : void {
    this.modal.create(CartPage).present();
  }
  showImage(picture : any , event) : void {
    //   event.stopPropagation();
    //   this.imageViewer.create(picture).present();
      return this.method.showImage(picture, event);
   }
}
