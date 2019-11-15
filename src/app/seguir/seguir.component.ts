import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DataApiService } from '../services/data-api.service';
import { Router } from '@angular/router';

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
  public flag : boolean;
  contador: number;

  public user : String;
  public user_anterior : String;
  data : any;

  constructor( private activatedRoute: ActivatedRoute,private dataApi: DataApiService, private router: Router) {
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
    this.flag = false;
    this.contador = 1;

  }

  async getDataApi(){
    this.user_anterior = "";
    if(this.user !="" && this.user !=" "){
      this.dataApi.usuario = this.user;
      this.dataApi.pagina = String(this.contador);
      this.contador++;
      this.data = await this.dataApi.getDatos().toPromise();
      if(this.data["data"]){
            if(this.user_anterior == this.data["data"]["users"][0]["screen_name"]){this.flag = true;}else{this.user_anterior = this.data["data"]["users"][0]["screen_name"];}
            for(var i = 0; (i < this.data["data"]["users"].length) && !this.flag; i++){
              if(this.data["data"]["users"][i]["screen_name"] == this.dato){ this.encontro = true; this.flag = true; break;}
            }
          }else{alert("Nombre de usuario invalido");}
        
      

      if(this.encontro){
        this.encontro = false;
        this.contador=0;
        this.router.navigate(['/gracias']);
        //alert("Gracias por completar el proceso");
      }else if(this.flag){
        this.contador=0;
        alert("Favor de seguir al creador para poder continuar");
      }else{
        this.getDataApi();
      }

      
    }else{alert("Favor de llenar campo 'username'");}
  }

}
