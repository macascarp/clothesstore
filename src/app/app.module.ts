import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* RUTAS */
import { AppRoutingModule } from './app-routing.module';

/* COMPONENTES */
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
