import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { MenuComponent } from './shohin/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { article001Component } from './article001/article.component';




export const routes: Routes = [
    { path: '', component: DashboardComponent }
    ,{ path: 'dashboard', component: DashboardComponent }
    ,{ path: 'shohin', component: MenuComponent }
    ,{ path: 'recipe', component: RecipeComponent }
    ,{ path: 'article001', component: article001Component }

    
];

