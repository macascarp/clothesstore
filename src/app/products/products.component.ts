import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../services/mercadolibre.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public data:any = []

  constructor(
    private mercadolibreService: MercadolibreService,
  ) { }

  ngOnInit(): void {

    this.data=this.mercadolibreService.products 

    this.mercadolibreService.loaderSearch.subscribe(async (value:string) => {
      this.data = await this.mercadolibreService.getProducts(value)
    })
  }

}
