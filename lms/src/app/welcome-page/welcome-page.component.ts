import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
  selector: 'app-welcome-page',
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

}
