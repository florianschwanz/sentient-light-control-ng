import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FloorComponent} from './components/floor/floor.component';

const routes: Routes = [
  {path: '', redirectTo: '/floor', pathMatch: 'full'},
  {path: 'floor', component: FloorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
