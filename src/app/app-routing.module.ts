import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthContextComponent} from "./components/auth-context/auth-context.component";
import {LoginPageComponent} from "./components/auth-context/inner-items/login-page/login-page.component";
import {SignUpPageComponent} from "./components/auth-context/inner-items/sign-up-page/sign-up-page.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AddTheStudentsComponent} from "./components/dashboard/components/add-the-students/add-the-students.component";
import {RemoveTheStudentComponent} from "./components/dashboard/components/remove-the-student/remove-the-student.component";
import {ListTheStudentsComponent} from "./components/dashboard/components/list-the-students/list-the-students.component";
import {AlterCoursesComponent} from "./components/dashboard/components/alter-courses/alter-courses.component";
import {FrontPageComponent} from "./components/dashboard/components/front-page/front-page.component";

const routes: Routes = [
  {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  {path:'auth',component:AuthContextComponent,children:[
      {path:'login',component:LoginPageComponent},
      {path:'signup',component:SignUpPageComponent}
    ]},
  {path:'dashboard',component:DashboardComponent, children:[
      {path: '',redirectTo:'/dashboard/front-page',pathMatch:'full'},
      {path: 'front-page',component: FrontPageComponent},
      {path: 'add-the-students',component: AddTheStudentsComponent},
      {path: 'remove-the-student',component: RemoveTheStudentComponent},
      {path: 'list-the-students',component: ListTheStudentsComponent},
      {path: 'alter-courses',component: AlterCoursesComponent}
      //{path: 'list-the-students',component: List}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
