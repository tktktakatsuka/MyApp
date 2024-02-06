import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { MenuComponent } from './shohin/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { article001Component } from './article001/article001.component';
import { article002Component } from './article002/article002.component';




export const routes: Routes = [
    { path: '', component: DashboardComponent }
    ,{ path: 'dashboard', component: DashboardComponent }
    ,{ path: 'shohin', component: MenuComponent }
    ,{ path: 'recipe', component: RecipeComponent }
    ,{ path: 'article001', component: article001Component }
    ,{ path: 'article002', component: article002Component }

    
];

