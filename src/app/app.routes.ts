import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { MenuComponent } from './shohin/menu.component';




export const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'shohin', component: MenuComponent },
    
];

