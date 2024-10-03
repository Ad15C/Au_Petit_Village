import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(products: Product[], sortBy: string): Product[] {
    console.log('Produits avant tri:', products);
    console.log('Critère de tri appliqué:', sortBy);
   
    if (!products || products.length === 0) {
      return [];
    }
    if (sortBy === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }
  

}
