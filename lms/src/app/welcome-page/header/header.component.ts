import { Component } from '@angular/core';
import { HoverDropdownDirective } from './hover-dropdown.directive';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [HoverDropdownDirective, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  goToLogin(){
    this.router.navigate(['../login'])
  }

  loggedIn(): boolean{
    if(sessionStorage.getItem("token")){
      return true;
    }
    return false;
  }

}