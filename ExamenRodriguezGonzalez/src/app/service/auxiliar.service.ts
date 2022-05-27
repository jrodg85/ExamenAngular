
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuxiliarService {
  itemsPorPagina: number = environment.itemsPorPagina;

  constructor(private http: HttpClient) { }

  getItemsResponse(respuestaApi: any): number {
    return respuestaApi.count;
  }

  getPaginasResponse(respuestaApi: any): number {
    return Math.ceil(this.getItemsResponse(respuestaApi) / this.itemsPorPagina);
  }

  getItemsPorPagina(urlEndPoint: string, pagina: number): Observable<any> {
    return this.http.get<any>(`${urlEndPoint}?page=${pagina}`)
  }
}
