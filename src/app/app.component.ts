import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IgxCardModule } from 'igniteui-angular';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent, DashboardComponent,  
      MatSlideToggleModule, MatIconModule, MatToolbarModule, MatButtonModule, FlexLayoutModule, IgxCardModule]
    
})
export class AppComponent implements OnInit{
  title = 'MyApp';

  // コンポーネントの初期化時に JavaScript を呼び出す
  ngOnInit() {
  }
}
