import { Injectable } from '@angular/core';
import { Product } from './product.model'; //Import de l'interface Product

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  //Utilisation de l'interface Product
  products: Product[] = [

    { id: 1,
      name:'Assuranceturix', 
      price: 10, 
      imageUrl:'/assets/Products/Assuranceturix.jpg', 
      description:'Figurine représentant Assuranceturix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { id: 2,
      name:'Asterix', 
      price: 12, 
      imageUrl:'/assets/Products/Asterix.jpg',
      description:'Figurine représentant Asterix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { id: 3,
      name:'Barbe Rouge', 
      price: 11, 
      imageUrl:'/assets/Products/Barbe_Rouge.jpg', 
      description: 'Figurine représentant Barbe Rouge. Elle fait partie de la collection Asterix et Obelix.',
    },

    { id: 4,
      name:'Obelix', 
      price:13,
      imageUrl:'/assets/Products/Obelix.jpg',
      description:'Figurine représentant Obelix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { id: 5,
      name:'Panoramix',
      price: 9, 
      imageUrl:'/assets/Products/Panoramix.jpg', 
      description:'Figurine représentant Panoramix. Elle fait partie de la collection Asterix et Obelix.',
    },

  ]
  
 constructor(){

 }

 getProducts() : Product[]{
  //utilisation de of pour créer une observable
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

}
