import { AbstractControl, ValidatorFn } from "@angular/forms";

export function ageMinimum(value : number) :ValidatorFn {
    return (control : AbstractControl) => {
        let valeurtoVerify : number = control.value
        if (valeurtoVerify == null) {
            return null
        } else if (valeurtoVerify >= value) {
            return null
        }
        return {erreurAge : `L'âge doit être supérieur ou égale à ${value}`}
    }
}