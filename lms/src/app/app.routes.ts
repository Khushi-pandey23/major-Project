import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { PopUpComponent } from './pop-up/pop-up.component';

import { CoursesComponent } from './course-categories/courses/courses.component';

export const routes: Routes = [
    { path: 'home' , component: WelcomePageComponent },
    { path: 'dashboard', component: StudentDashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'courses', component: CourseCategoriesComponent },
    { path: 'courses/:category', component: CoursesComponent },
    { path: 'become-member', component: BecomeMemberComponent},
    { path: 'pop-up', component: PopUpComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'} 
];
