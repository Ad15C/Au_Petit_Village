import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: any;
  productDetails: any;

  constructor (private route : ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      //On récupère l'id du produit
      this.productId = params.get('id');
      
      //vérification de l'ID
      console.log('ID récupéré depuis l\'URL : ', this.productId)

      if (this.productId) {
        // Convertir l'ID en number avant la recherche
        const numericId = Number(this.productId);
        
        // Récupérer les détails du produit
        this.productDetails = this.productsService.getProductById(numericId);
        console.log('Détails du produit:', this.productDetails)
      }
    });  
  }
}

