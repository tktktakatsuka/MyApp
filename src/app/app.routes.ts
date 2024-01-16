import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component';
import { MenuComponent } from './menu/menu.component';



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hoge-hoge', component: HogeHogeComponent },
    { path: 'menu', component: MenuComponent }
    
];

