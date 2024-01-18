import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hoge-hoge', component: HogeHogeComponent },
    { path: 'menu', component: MenuComponent },
    { path: '404', component: NotFoundComponent },
    
    
    // すべての他のパスは404ページにリダイレクト
    { path: '**', redirectTo: '/404' }
    
];

