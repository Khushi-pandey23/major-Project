import { Component } from '@angular/core';
import { HoverDropdownDirective } from './hover-dropdown.directive';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [HoverDropdownDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['../login'])
  }

}