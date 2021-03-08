import { Component } from '@angular/core';
import { NavController,AlertController,AlertOptions,ActionSheetController,ActionSheetOptions,ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/interface-products';
import { ImageViewerController } from 'ionic-img-viewer';
import { MethodProvider } from '../../providers/method/method';
import { CreateProductPage } from '../create-product/create-product';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Articles : Product[];
//constructeur
constructor(public navCtrl: NavController,
            public alertCtrl :AlertController ,
            public actionCtrl :ActionSheetController,
            public modalCtrl : ModalController,
            public imageViewer : ImageViewerController,
            public  method : MethodProvider ) {
      //liste des BD
      this.Articles = [
        {//product2= telephone
          title : 'Telephone',
          description :"Mbola tsisy simba sady mbola mifono selefana ",
          price : 600000,
          category : 'appareil mobile',
          createdAt : new Date(),
          state : 'Vaovao',
          city : 'Antananarivo',
          id : '1',
          averageStar :4,
          availability : {
            available :true,
            type : 'livraison',
            feed:10000
          },
          pictures : [
            'assets/imgs/Product2/j1.jpg',
            'assets/imgs/Product2/j2.jpg',
            'assets/imgs/Product2/j3.jpg',
            'assets/imgs/Product2/j4.jpg',
          ]
        },
        //product1= vetement
        {
          title : 'Vetements',
          description :"Mbola raitra tsara daholo ",
          price : 2000,
          category : 'vetements',
          createdAt : new Date(),
          state : 'Vaovao',
          city : 'Toliara',
          id : '2',
          averageStar :2,
          availability : {
            available :true,
            type : 'livraison',
            feed:500
          },
          pictures : [
            'assets/imgs/Product1/j1.jpg',
            'assets/imgs/Product1/j2.jpg',
            'assets/imgs/Product1/j3.jpg',
            'assets/imgs/Product1/j4.jpg',
          ]
        },
        // product3= computers
        {
          title : 'PC',
          description :"Mbola tsisy simba sady mbola mifono selefana ",
          price : 860000,
          category : 'PC',
          createdAt : new Date(),
          state : 'Vaovao',
          city : 'Tamatave',
          id : '3',
          averageStar :5,
          availability : {
            available :true,
            type : 'livraison',
            feed:10000
          },
          pictures : [
            'assets/imgs/Product3/j1.jpg',
            'assets/imgs/Product3/j2.jpg',
            'assets/imgs/Product3/j3.jpg',
            'assets/imgs/Product3/j4.jpg',
          ]
        },
        //product4= tennis
        {
          title : 'Tennis',
          description :"Mbola vao-nafarana tany ivelany ",
          price : 40000,
          category : 'tennis',
          createdAt : new Date(),
          state : 'Vaovao',
          city : 'Mahajanga',
          id : '4',
          averageStar :2,
          availability : {
            available :true,
            type : 'livraison',
            feed:2000
          },
          pictures : [
            'assets/imgs/Product4/j1.jpg',
            'assets/imgs/Product4/j2.jpg',
            'assets/imgs/Product4/j3.jpg',
            'assets/imgs/Product4/j4.jpg',
          ]
        }
      ]
  }
  showDetails(article : Product ): void{
    this.navCtrl.push(DetailsPage,{data:article});
  }
  showImage(picture : any , event) : void {
  //   event.stopPropagation();
  //   this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
 }
 showCreatePage() {
  this.navCtrl.push(CreateProductPage);
 }
}
