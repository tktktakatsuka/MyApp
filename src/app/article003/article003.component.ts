import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './article003.component.html',
  styleUrl: './article003.component.css',
})
export class article003Component {
  routeText =
    '' +
    "import { Routes } from '@angular/router';\r\n" +
    "import { HomeComponent } from './home/home.component';\r\n" +
    '\r\n' +
    'export const routes: Routes = [\r\n' +
    "    { path: 'home', component: HomeComponent }\r\n" +
    '];\r\n' +
    '';

  outlet = '' + '<router-outlet />';

  exeClipbordCopy(idName: any) {
    // data-urlの値を取得
    let copy = document.getElementById(idName);
    let copyString: any = copy?.textContent;

    // クリップボードにコピー
    navigator.clipboard.writeText(copyString);
    
    $('.alert').fadeIn();
    $('.alert').fadeOut();
  }
}
