import { Component } from '@angular/core';
import { Header } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-micro-frontend';
}
