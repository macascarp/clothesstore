import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../services/mercadolibre.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  /* Crear variable 'aleatoriaData */

  public random: any = [];

  /* Inyectar el servicio de ML */
  constructor(private mercadolibreService: MercadolibreService) {}

  /* Llamo al servicio que trae los datos */
  async ngOnInit() {
    this.random = await this.mercadolibreService.getRandomProduct();
  }
}
