import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './Components/about/about.component';

export const routes: Routes = [
    //{ path:'',redirectTo:'/home',pathMatch:'full'},
    //{ path:'', component: HomeComponent },
     //{ path: 'about', component: AboutComponent },
     //{ path: 'about/:id', component: AboutComponent },
    
     //lazy loading routing
     {
        path:'',
        loadComponent:()=>
             import('./pages/home/home.component').then((c)=>c.HomeComponent),
     },

     {
        path:'about',
        loadComponent:()=>
            import('./pages/about/about.component').then((c)=>c.AboutComponent)
     },
     {
        path:'admin',
        loadComponent:()=>
            import('./pages/admin/admin.component').then((c)=>c.AdminComponent)
     },
     {
        path:'courses',
        loadComponent:()=>
            import('./pages/courses/courses.component').then((c)=>c.CoursesComponent)
     }
];

