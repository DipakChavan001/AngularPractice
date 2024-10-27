import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main-app/header/header.component';
import { FooterComponent } from './main-app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//  title=' testing projects';

//  ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
//   //this.changeTitle();
//  }

//  changeTitle(){
//   this.title='Sample Project';
//  }


}
