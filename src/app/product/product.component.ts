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
      //Vérification de l'ID
      if (!this.productId) {
        console.log('Aucun ID de produit n\'est fourni.');
        //Retourne un message d'erreur
        return;
      }
      //Convertir l'ID en nombre avant la recherche
      const numericId = Number(this.productId);

      if (!isNaN(numericId)) {
        //Récupère les détails du produit
        this.productDetails = this.productsService.getProductById(numericId);
        console.log('Détails du produit', this.productDetails);
        } else {
          console.log('ID non valide');
        }
    })
  }
}

