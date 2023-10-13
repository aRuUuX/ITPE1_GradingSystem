import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./layout/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: "user-management",
    loadChildren: () => import('./layout/user-management/user-management.module').then(mod => mod.UserManagementModule)
  },
  {
    path: "students",
    loadChildren: () => import('./layout/students/students-routing.module').then(mod => mod.StudentsRoutingModule)
  },
  {
    path: "teachers",
    loadChildren: () => import('./layout/teachers/teachers-routing.module').then(mod => mod.TeachersRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
