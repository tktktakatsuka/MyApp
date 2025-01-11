
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
// import { ShohinComponent } from './shohin/shohin.component';
// import { RecipeComponent } from './recipe/recipe.component';
import { article001Component } from './article001/article001.component';
import { article002Component } from './article002/article002.component';
import { article003Component } from './article003/article003.component';
import { article004Component } from './article004/article004.component';
import { article005Component } from './article005/article005.component';
import { article006Component } from './article006/article006.component';
import { ChatComponent } from './chat/chat.component';



export const routes: Routes = [
    { path: '', component: DashboardComponent }
    // ,{ path: 'shohin', component: ShohinComponent }
    // ,{ path: 'recipe', component: RecipeComponent }
    ,{ path: 'article001', component: article001Component }
    ,{ path: 'article002', component: article002Component }
    ,{ path: 'article003', component: article003Component }
    ,{ path: 'article004', component: article004Component }
    ,{ path: 'article005', component: article005Component }
    ,{ path: 'article006', component: article006Component }
    ,{ path: 'chat', component: ChatComponent }
    
];

