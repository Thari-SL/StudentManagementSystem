import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './components/auth-context/auth-context.component';
import { LoginPageComponent } from './components/auth-context/inner-items/login-page/login-page.component';
import { SignUpPageComponent } from './components/auth-context/inner-items/sign-up-page/sign-up-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopBarComponent } from './components/dashboard/items/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { AddTheStudentsComponent } from './components/dashboard/components/add-the-students/add-the-students.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { RemoveTheStudentComponent } from './components/dashboard/components/remove-the-student/remove-the-student.component';
import { ListTheStudentsComponent } from './components/dashboard/components/list-the-students/list-the-students.component';
import { AlterCoursesComponent } from './components/dashboard/components/alter-courses/alter-courses.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import { Semester1Component } from './components/dashboard/components/alter-courses/semester1/semester1.component';
import { Semester2Component } from './components/dashboard/components/alter-courses/semester2/semester2.component';
import { Semester3Component } from './components/dashboard/components/alter-courses/semester3/semester3.component';
import { Semester4Component } from './components/dashboard/components/alter-courses/semester4/semester4.component';
import { Semester5Component } from './components/dashboard/components/alter-courses/semester5/semester5.component';
import { Semester6Component } from './components/dashboard/components/alter-courses/semester6/semester6.component';
import { Semester7Component } from './components/dashboard/components/alter-courses/semester7/semester7.component';
import { Semester8Component } from './components/dashboard/components/alter-courses/semester8/semester8.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FrontPageComponent } from './components/dashboard/components/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginPageComponent,
    SignUpPageComponent,
    DashboardComponent,
    TopBarComponent,
    AddTheStudentsComponent,
    RemoveTheStudentComponent,
    ListTheStudentsComponent,
    AlterCoursesComponent,
    Semester1Component,
    Semester2Component,
    Semester3Component,
    Semester4Component,
    Semester5Component,
    Semester6Component,
    Semester7Component,
    Semester8Component,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
