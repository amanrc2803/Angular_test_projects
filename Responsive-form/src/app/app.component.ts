import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   
  
  Form= new FormGroup({
    name: new FormControl('',
    Validators.compose([
  	Validators.required,
    Validators.minLength(10),
    Validators.maxLength(20)
	])),



    dob: new FormControl('',Validators.required),
    email: new FormControl('',Validators.compose([
  	Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),

   

    country: new FormControl('',Validators.required),
    terms: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirm_password: new FormControl('',Validators.required),







  })
  get name(){return this.Form.get('name')}
  get email(){return this.Form.get('email')}

  get dob(){return this.Form.get('dob')}
  get country(){return this.Form.get('country')}
    get terms(){return this.Form.get('terms')}
        get password(){return this.Form.get('password')}
                get confirm_password(){return this.Form.get('confirm_password')}

                







    validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
}

    onSubmit() {
  if (this.Form.valid) {
    console.log('form submitted');
  } else {
    this.validateAllFormFields(this.Form); 
  }
}


}
