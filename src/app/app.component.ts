import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TextComponent } from './components/text/text.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TextComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sibella';
}
