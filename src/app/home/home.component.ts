import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Bienvenue Au Petit Village';
  presentation ='Nous sommes une entreprise sépcialisée dans la confection de figurines inspirées de la bande dessinnée Astérix & Obélix. Nos produits sont fabriqués en France et vous seront livrés sous 24 à 48 Heures. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla tortor, dapibus vitae ipsum ut, cursus varius libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec malesuada orci. Etiam tempus risus hendrerit, consequat nibh eget, maximus lorem. Nullam auctor a est at tincidunt. Proin malesuada lorem vel lorem molestie scelerisque. Nulla pulvinar scelerisque nulla. Proin magna nibh, gravida sed eleifend nec, bibendum in tellus. Phasellus porta odio quis sodales imperdiet. Donec blandit nulla erat, sit amet placerat augue interdum ac. Mauris a urna feugiat, tempor ipsum sed, dictum justo. Mauris efficitur leo sed ornare luctus. Integer in lorem vel quam blandit sodales. Proin sodales justo eget sodales maximus. Praesent eget nibh euismod, ultricies erat dignissim, elementum elit.';
  products : any [] = []

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
