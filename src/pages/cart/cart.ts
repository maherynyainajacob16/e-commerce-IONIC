import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, AlertOptions } from 'ionic-angular';
import { itemCart } from '../../models/interface-itemCart';
import { Storage } from '@ionic/storage';
import { Product } from '../../models/interface-products';
import { MethodProvider } from '../../providers/method/method';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
 
cartItems : itemCart [];
total : number = 0;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl : ViewController,
    public storage : Storage,
    public toast : ToastController,
    public alertCtrl : AlertController,
    public method : MethodProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart")
      .then((data : itemCart[])=>{
      this.cartItems = data;
      this.cartItems.forEach((element : itemCart)=>{
        if(element.item.availability.type === "disponible en magasin"){
          element.item.availability.feed = 0;
        }
        this.total += (element.item.availability.feed + element.item.price * element.qty);
      })
    })
    .catch(err=>{
      console.log("Erreur",err);
    })
  }
  closeModal() : void {
    this.viewCtrl.dismiss() 

  }
  removeItem(article : itemCart , index : number) : void {
   let options : AlertOptions = {
     title : "attention !",
     subTitle : `Etes-vous sur de vouloir supprimer ${article.item.title} ?`,
     buttons : [
       {
         text  : "Annuler",
         role : "cancel"
       },
       {
         text : "Retirer",
         handler : ()=>{
           let price : number = article.item.price;
           let qty : number = article.qty;
           let feed : number = article.item.availability.feed;
           let myTotal : number = feed+price*qty;
           this.cartItems.splice(index, 1);
           this.storage.set("Cart",this.cartItems)
            .then((data)=>{
              this.total -= myTotal;
              this.toast.create({
                message : " Articles retiré du panier !",
                duration : 1000
              }).present();
            })
            .catch((error)=>{
              console.log("error",error);
            })
         }
       }
     ]
   }
   this.alertCtrl.create(options).present()
  }
  showImage (picture : any , event) : void {
    //   event.stopPropagation();
    //   this.imageViewer.create(picture).present();
      return this.method.showImage(picture, event);
   }

}
