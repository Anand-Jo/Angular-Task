import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { SettingsComponent } from './settings/settings.component';
import { TableComponent } from './table/tableComponent.component';


const routes: Routes = [
  {
    path: 'table',
    component:TableComponent
  },
  {
    path: 'cards',
    component:CardsComponent
  },
  {
    path: 'settings',
    component:SettingsComponent
  },
  {
    path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
