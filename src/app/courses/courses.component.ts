import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  //for getting data from parent companent to child and vise versa we use input and output Decorators.
  @Input() course:any;
}
