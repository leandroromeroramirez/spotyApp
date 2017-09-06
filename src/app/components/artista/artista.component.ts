import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  top:any[];

  constructor(private _route:ActivatedRoute, private _spS:SpotifyService) { }

  ngOnInit() {
    this._route.params.map(
      parametros => parametros['id']
    ).subscribe( id=>{
      console.log(id);
      this._spS.getArtista(id).subscribe(data=>this.artista = data);
      this._spS.getTop(id).subscribe(data=>this.top = data);
    });

  }

}
