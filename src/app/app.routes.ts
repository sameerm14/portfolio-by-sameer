import { Routes } from '@angular/router';
import { MyInfoComponent } from './my-info/my-info.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'myinfo', component: MyInfoComponent },
];
