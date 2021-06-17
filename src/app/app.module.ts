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
import { FormsModule } from '@angular/forms';
import { MercadolibreService } from './services/mercadolibre.service';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MercadolibreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
