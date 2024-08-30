import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  serie = {
    nombre: "",
    img: "https://concepto.de/wp-content/uploads/2019/04/Nebulosa-de-Orion-e1554813166944.jpg"
  }

  user = {
    usuario: "",
    password: ""
  }

  constructor(private navController: NavController) {}

  goTo() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data1: this.user.usuario
      }
    };
    this.navController.navigateForward(['/pagdos'], navigationExtras);
  }
}





