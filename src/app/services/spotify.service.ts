import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[]=[];
  urlBusqueda:string = "https://api.spotify.com/v1/search?";
  cliente_id ="dd8b67429a17477c84108bbe4f524c13";
  cliente_secret="862dd88e29c74f8fa5058336b7574217";

  constructor(private _http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDFKktz1ZlGc90IKE3AiKSxmjgWlGnWzQwpCzI4JQEXP2gZdmW20sQVtcocL2rCblamHAfvBg8zGjdhbzTo-A');

    let query = `q={termino}&type=artist`;
    let url = this.urlBusqueda+query;

    return this._http.get(url, {headers}).map(res=>{
      console.log(res.json);
    })

  }
}
