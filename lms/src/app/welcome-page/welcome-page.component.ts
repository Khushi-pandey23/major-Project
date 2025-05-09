import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { BeginAdventureComponent } from "./begin-adventure/begin-adventure.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { ExploreCoursesComponent } from "./explore-courses/explore-courses.component";
import { CommunitySectionComponent } from "./community-section/community-section.component";

@Component({
  selector: 'app-welcome-page',
  imports: [HeaderComponent, HeroSectionComponent, BeginAdventureComponent, FeaturesSectionComponent, ExploreCoursesComponent, CommunitySectionComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

}
