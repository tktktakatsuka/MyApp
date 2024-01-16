import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component';
import { MenuComponent } from './menu/menu.component';
import { PathNotFoundComponentComponent } from './path-not-found-component/path-not-found-component.component';



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hoge-hoge', component: HogeHogeComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', component:  PathNotFoundComponentComponent}  // Wildcard route for a 404 page
];
