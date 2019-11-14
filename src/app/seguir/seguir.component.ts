import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-seguir',
  templateUrl: './seguir.component.html',
  styleUrls: ['./seguir.component.css']
})
export class SeguirComponent implements OnInit {
  public creadores: String[][];
  valor: number;
  dato: String;
  usuario: String;

  constructor( private activatedRoute: ActivatedRoute,private dataApi: DataApiService) {
    this.activatedRoute.params.subscribe( params => {
       this.valor = params['id'];
    })
    this.usuario="ss";

   }

  ngOnInit() {
    this.creadores = [["Creador 1","franciscleylim"],["Creador 2","ProAndroid"],["Creador 3","AnnaCLXY"],["Creador 4","Corona_MX"],["Creador 5","CarameloYoutube"]];
     this.dato= this.creadores[this.valor][1];
    
    this.getDataApi();

  }

  getDataApi(){
    this.dataApi.getDatos().subscribe(data => console.log(data));
  }

}
