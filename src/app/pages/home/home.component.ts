import { Component } from '@angular/core';
import {RouterLink } from '@angular/router';
//import { Strings } from '../../enum/strings.enum';
import { CoursesComponent } from '../courses/courses.component';
import { AboutComponent } from "../about/about.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CoursesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
//private router = inject (Router);
//constructor(private router : Router){}
// val: number=2;
//courses:any[]=[];
 constructor(){}

  //  navigate(){
  //    this.router.navigate(['/about']);
  //  }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      //this.getCourses();
    }
  // getCourses(){
  //   const data=localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
    
  //   if(data){
  //     this.courses=JSON.parse(data);
  //   }
  // }
}
