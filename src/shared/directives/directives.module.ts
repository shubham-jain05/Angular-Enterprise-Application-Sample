import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildInfantAgeValidatorDirective } from "./share-directives/childinfantagevalidator";
import { DragDirective } from "./share-directives/drag-frop-directive";
import { CustomRequiredFiledsForExistingUserDirective } from "./share-directives/custom-required-existing-user.directive";

@NgModule({
  declarations: [
    ChildInfantAgeValidatorDirective,
    DragDirective,
    CustomRequiredFiledsForExistingUserDirective,
  ],
  imports: [CommonModule],
  exports: [
    ChildInfantAgeValidatorDirective,
    DragDirective,
    CustomRequiredFiledsForExistingUserDirective,
  ],
})
export class DirectivesModule {}
