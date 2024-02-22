import{ AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

export const confirmPasswordValidator: ValidatorFn = (control : AbstractControl):ValidationErrors | null =>{ 
    console.log("validator called",control.value.password,control.value.confirmPassword)
      return control.value.password === control.value.confirmPassword ? null : {PasswordNoMatch : true};
    };