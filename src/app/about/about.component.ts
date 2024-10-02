import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 @Input() title= 'Quelques mots sur notre entreprise';
 @Input() about= 'Nous sommes une équipe de passionnés de figurines, et plus précisémment , de nos chers amis Gaulois. C\'est avec plaisir que nous aimons confectioner ces figurines et vous transmettre notre passion. Nous avons commencé avec Astérix et Obelix, et par la suite, nous avons souhaité faire l\'ensemble des personnages. Nous mettons un point d honneur à vous offrir des produits "Made In France" et peint à la main.';
 @Input() paragraphe='Le lecteur voudra bien nous permettre de donner très peu de faits clairs et précis sur cette époque de la vie de Julien. Ce n\'est pas qu\'ils nous manquent, bien au contraire ; mais peut-être ce qu\'il vit au séminaire est-il trop noir pour coloris modéré que l\'on a cherché à conserver dans ces feuilles. Les contemporains qui souffrent de certaines choses ne peuvent s\'en souvenir qu\'avec une horreur qui paralyse tout autre plaisir, même celui de lire un conte.';
 @Input() conclusion= 'Ils ont faim peut-être en ce moment, se dit-il à lui-même ; sa gorge se serra, il lui fut impossible de manger et presque de parler. Ce fut bien pis un quart d\'heure après ; on entendait de loin en loin quelques accents d\'une chanson populaire, et, il faut l\'avouer, un peu ignoble, que chantait l\'un des reclus. M. Valenod regarda un de ses gens en grande livrée, qui disparut, et bientôt on n’entendit plus chanter. Dans ce moment, un valet offrait à Julien du vin du Rhin, dans un verre vert, et Mme Valenod avait soin de lui faire observer que ce vin coûtait neuf francs la bouteille pris sur place.';
}
