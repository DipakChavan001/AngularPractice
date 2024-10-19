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
             import('./home/home.component').then((c)=>c.HomeComponent),
     },

     {
        path:'about',
        loadComponent:()=>
            import('./about/about.component').then((c)=>c.AboutComponent)
     },
     {
        path:'admin',
        loadComponent:()=>
            import('./admin/admin.component').then((c)=>c.AdminComponent)
     }
];

