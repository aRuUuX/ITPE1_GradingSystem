import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "manage/dashboard", pathMatch:"prefix",
      },
      {
        path: "manage/dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
