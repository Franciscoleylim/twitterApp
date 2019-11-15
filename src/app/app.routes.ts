import {RouterModule, Routes} from '@angular/router';
import { CreadorComponent } from './creador/creador.component';
import { SeguirComponent } from './seguir/seguir.component';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';

const APP_ROUTES: Routes = [
   { path: 'Home', component: CreadorComponent},
   { path: 'Seguir/:id', component: SeguirComponent},
   { path: 'gracias', component: AgradecimientoComponent},
   { path: '**', pathMatch: 'full', redirectTo: 'Home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES) ;