import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyLoadRoutes } from "src/configs/lazy-load-routing/lazyLoadRoutes";

@NgModule({
  imports: [RouterModule.forChild(LazyLoadRoutes)],
  exports: [RouterModule],
})
export class AppLayoutRoutingModule {}
