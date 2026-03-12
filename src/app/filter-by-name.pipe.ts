import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {

    if (!products || products.length === 0) {
      return [];
    }

    if (!searchTerm || searchTerm.trim() === '') {
      return products;
    }

    return products.filter((prd) =>
      prd.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }
}