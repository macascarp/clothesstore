import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(
    private http:HttpClient
  ) {}
  getProducts(search:String) {
    const urlApi = `https://api.mercadolibre.com/sites/MCO/search?categorie=MCO1430&q=${search}`
    console.log(urlApi)
    /* /sites/$SITE_ID/search?category=$CATEGORY_ID
    $ curl -X GET https://api.mercadolibre.com/categories/
    /sites/$SITE_ID/search?q=Motorola%20G6
    MLA1430 */
    this.http.get(urlApi).subscribe(res => {
      console.log(res)
    })
  }
}
