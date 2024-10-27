import { Component, inject, Input } from '@angular/core';
//import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent{

  //for getting data from parent companent to child
  // and vise versa we use input and output Decorators.
  // @Input() courses: any;

  courses: Course[] = [];
  @Input() isAdmin = false;
  // @Output() del=new EventEmitter();
  coursesSub !: Subscription;
  private courseService = inject(CourseService);


  constructor(
    //private courseService:CourseService
  ) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.getCourses();
    this.coursesSub = this.courses = this.courseService.getCourses();


    this.courseService.courses.subscribe({
      next: (courses) => {
        this.courses = courses;
        console.log('courses:', this.courses);
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
  // getCourses(){
  //    const data=localStorage.getItem(Strings.STORAGE_KEY);
  //   //   console.log(data);

  //     if(data){
  //        this.courses=JSON.parse(data);
  //     }
  //   }

  deleteCourse(course: Course) {
    //this.del.emit(course);
    this.courseService.deleteCourse(course);
  }
  //ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //console.log('courses ondestroy');
     //if (this.coursesSub) 
    //   this.coursesSub.unsubscribe();
    // }
  //}
}
