import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { ShohinComponent } from "./shohin/shohin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IgxCardModule } from 'igniteui-angular';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet,  DashboardComponent,
    MatSlideToggleModule, MatIconModule, MatToolbarModule, MatButtonModule, FlexLayoutModule, IgxCardModule, MatSidenavModule, MatButtonModule,MatCardModule]

})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'MyApp';
}





