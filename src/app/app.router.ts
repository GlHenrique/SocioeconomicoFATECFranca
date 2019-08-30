import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GraficoComponent} from './grafico/grafico.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'grafico', component: GraficoComponent}
];
export const RoutingModule = RouterModule.forRoot(routes);
