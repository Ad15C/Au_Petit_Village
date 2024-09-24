import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() title = 'Bienvenue Au Petit Village';
  @Input() presentation ='Nous sommes une entreprise sépcialisée dans la confection de figurines inspirées de la bande dessinnée Astérix & Obélix. Nos produits sont fabriqués en France et vous seront livrés sous 24 à 48 Heures.';
}
