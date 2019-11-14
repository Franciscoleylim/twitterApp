import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creador',
  templateUrl: './creador.component.html',
  styleUrls: ['./creador.component.css']
})
export class CreadorComponent implements OnInit {
  public creadores : String[][];
  constructor() { }

  ngOnInit() {
    this.creadores = [["Creador 1","franciscleylim"],["Creador 2","ProAndroid"],["Creador 3","AnnaCLXY"],["Creador 4","Corona_MX"],["Creador 5","CarameloYoutube"]];
 
  }

}
