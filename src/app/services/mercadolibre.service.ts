import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/* Variables de la clase */
export class MercadolibreService {
  public products = [];
  private searchEvent = new Subject<string>();

  /* Inyectar dependencias */
  constructor(private http: HttpClient, private router: Router) {}

  /* Observa  */
  loaderSearch = this.searchEvent.asObservable();

  /* Le enttrega un valor a 'observable */
  emitterSearch(value: string) {
    this.searchEvent.next(value);
  }

  async getProducts(search: String) {
    const urlApi = `https://api.mercadolibre.com/sites/MCO/search?categorie=MCO1430&q=${search}`;

    const data: any = await this.http.get(urlApi).toPromise();
    this.router.navigateByUrl('products');
    this.products = data.results;
    return this.products;
  }
}
