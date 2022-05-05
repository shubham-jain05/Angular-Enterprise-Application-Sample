import {
  Validator,
  NG_VALIDATORS,
  ValidationErrors,
  AbstractControl,
  FormControl,
} from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[userRequiredField]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomRequiredFiledsForExistingUserDirective,
      multi: true,
    },
  ],
})
export class CustomRequiredFiledsForExistingUserDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    try {
      const email = control.parent.get("email") as FormControl;
      const qPhoneNumber = control.parent.get("qPhoneNumber") as FormControl;
      const bookRefNumber = control.parent.get("bookRefNumber") as FormControl;

      if (
        (email && email.value) ||
        (qPhoneNumber && qPhoneNumber.value) ||
        (bookRefNumber && bookRefNumber.value)
      ) {
        return null;
      }
      return { required: true };
    } catch (e) {}
  }
}
