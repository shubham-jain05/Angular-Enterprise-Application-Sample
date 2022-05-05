import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGaurdService } from "src/core/services/authentication/auth-gaurd.service";

const routes: Routes = [
  {
    path: "Dashboard",
    canActivate: [AuthGaurdService],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
