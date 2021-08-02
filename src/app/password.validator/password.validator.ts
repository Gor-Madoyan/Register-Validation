import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function passwordValidator(password: string): ValidatorFn {
    return (control: AbstractControl):  ValidationErrors | null => {
        // debugger;
        return control.value && password && control.value !== password ?
         {
            'passwordValidator': true
        }:
        null
    }
}
