import { Component } from '@angular/core';
import {RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//private router = inject (Router);
//constructor(private router : Router){}
// val: number=2;
// constructor(){}

  //  navigate(){
  //    this.router.navigate(['/about']);
  //  }
}
