import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
 constructor() {};
 
 getProducts() {
  return [
    { name:'Assuranceturix', 
      price: 10, 
      imageUrl:'/assets/Products/Assuranceturix.jpg', 
      description:'Figurine représentant Assuranceturix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { name:'Asterix', 
      price: 12, 
      imageUrl:'/assets/Products/Asterix.jpg',
      description:'Figurine représentant Asterix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { name:'Barbe Rouge', 
      price: 11, 
      imageUrl:'/assets/Products/Barbe_Rouge.jpg', 
      description: 'Figurine représentant Barbe Rouge. Elle fait partie de la collection Asterix et Obelix.',
    },

    { name:'Obelix', 
      price:13,
      imageUrl:'/assets/Products/Obelix.jpg',
      description:'Figurine représentant Obelix. Elle fait partie de la collection Asterix et Obelix.',
    },

    { name:'Panoramix',
      price: 9, 
      imageUrl:'/assets/Products/Panoramix.jpg', 
      description:'Figurine représentant Panoramix. Elle fait partie de la collection Asterix et Obelix.',
    },
  ]
 }
}
