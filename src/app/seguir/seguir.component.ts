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

  public encontro : boolean;

  public user : String;

  constructor( private activatedRoute: ActivatedRoute,private dataApi: DataApiService) {
    this.activatedRoute.params.subscribe( params => {
       this.valor = params['id'];
    })
    this.usuario="ss";

   }

  ngOnInit() {
    this.creadores = [["Creador 1","franciscleylim"],["Creador 2","ProAndroid"],["Creador 3","AnnaCLXY"],["Creador 4","Corona_MX"],["Creador 5","CarameloYoutube"]];
    this.dato= this.creadores[this.valor][1];
    this.user = "";
    this.encontro = false;

  }

  getDataApi(){
    
    if(this.user !="" && this.user !=" "){
      this.dataApi.usuario = this.user;
      this.dataApi.getDatos().subscribe( (data : any) => {
        if(data["data"]){
          for(var i = 0; i < data["data"]["users"].length; i++){
            if(data["data"]["users"][i]["screen_name"] == this.dato){ this.encontro = true; break;}
          }
          if(this.encontro){
            this.encontro = false;
            alert("Gracias por completar el proceso");
          }else{
            alert("Favor de seguir al creador para poder continuar");
            console.log(data);
          }
        }else{alert("Nombre de usuario invalido");}
      });
    }else{alert("Favor de llenar campo 'username'");}
  }

}
