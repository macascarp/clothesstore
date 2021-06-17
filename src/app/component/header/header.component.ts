import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from 'src/app/services/mercadolibre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public search:string= ''

  constructor(
    private mercadolibreService: MercadolibreService,
  ) { }

  ngOnInit(): void {
  }

  searchButton() {
    this.mercadolibreService.getProducts(this.search) 
    this.mercadolibreService.emitterSearch(this.search)
  }

}
