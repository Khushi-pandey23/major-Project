import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-begin-adventure',
  imports: [],
  templateUrl: './begin-adventure.component.html',
  styleUrl: './begin-adventure.component.css'
})
export class BeginAdventureComponent {

  constructor(private route: ActivatedRoute, private router: Router){ }

  register(){
    this.router.navigate(["/signup"]);
  }
}
