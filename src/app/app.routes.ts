import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';




export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'menu', component: MenuComponent },
    
];

