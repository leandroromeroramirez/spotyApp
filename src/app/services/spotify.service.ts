import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[]=[];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlBusquedaArtista:string = "https://api.spotify.com/v1/artists";

  cliente_id ="dd8b67429a17477c84108bbe4f524c13";
  cliente_secret="862dd88e29c74f8fa5058336b7574217";
  token = "BQBrqErSthlZggQb15uhYPnS-NMS0m2RxgVfS5_K_7RMMtPOS9cEO-CueWGDKyhXqA8zCepqeLuzZdt1IIadRw";

  constructor(private _http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer '+ this.token);

    let query = '?q='+termino+'&type=artist';
    let url = this.urlBusqueda+query;

    return this._http.get(url, {headers}).map(res=>{
      this.artistas = res.json().artists.items;
      // return this.artistas;
    })

  }

  getArtista(id:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer '+ this.token);

    let query = '/'+id;
    let url = this.urlBusquedaArtista+query;

    return this._http.get(url, {headers}).map(res=>{
      console.log(res.json());
      return res.json();
    })

  }

  getTop(id:string){
    let headers = new Headers();
    
    headers.append('authorization', 'Bearer '+ this.token);

    let query = '/'+id+'/top-tracks?country=ES';
    let url = this.urlBusquedaArtista+query;

    return this._http.get(url,{headers}).map(res=>{
      console.log(res.json().tracks);
      return res.json().tracks;
    })

  }

  getToken():string{

    this._http.get('https://accounts.spotify.com/api/token').map(res=>{return res.json()});
    return
  }
}
