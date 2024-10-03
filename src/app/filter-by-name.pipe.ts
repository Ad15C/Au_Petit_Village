import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: Product[], filterBy: string): Product[] {
    console.log('Produits avant filtrage:', products);
    console.log('Filtre appliqué:', filterBy);
    
    if (!products || products.length === 0) {
      return [];
    }
  
    if (filterBy.toLowerCase() === 'all') {
      return products;
    } else if (filterBy.toLowerCase() === 'name') {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return products.filter((prd) =>
        prd.name.toLowerCase().includes(filterBy.toLowerCase())
      );
    }
  }
}