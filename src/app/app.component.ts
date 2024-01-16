import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HogeHogeComponent } from "./hoge-hoge/hoge-hoge.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MenuComponent, DashboardComponent, HogeHogeComponent]
})
export class AppComponent {
  title = 'MyApp';
}
