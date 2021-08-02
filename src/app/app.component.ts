import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private fb: FormBuilder) {}

  registrationForm!:any
  get firstName() {
    return this.registrationForm.get('firstName')
  };

  get lastName() {
    return this.registrationForm.get('lastName')
  };

  get email() {
    return this.registrationForm.get('email')
  };

 get extraForm() {
   return this.registrationForm.get('extraForm') as FormArray
  }

  addForm() {
    this.extraForm.push(this.fb.control(''))

  };

 get password() {
    return this.registrationForm.get('password')
  };

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  };

pass:any = ''
confirmPass:any = ''

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['',[ Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required]],
      extraForm:this.fb.array([ this.fb.control('')])
    })
  };


}

