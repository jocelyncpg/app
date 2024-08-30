import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';
import { FooterModule } from '../../footer/footer.module'; // Asegúrate de importar FooterModule aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule,
    FooterModule // Agrega FooterModule aquí
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
