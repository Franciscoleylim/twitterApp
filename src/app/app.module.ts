import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import {APP_ROUTING} from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { CreadorComponent } from './creador/creador.component';
import { SeguirComponent } from './seguir/seguir.component';
import { DataApiService } from './services/data-api.service';


@NgModule({
  declarations: [
    AppComponent,
    CreadorComponent,
    SeguirComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
