import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { confirmValidator } from './password.validator/password.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  constructor(private fb: FormBuilder) {}

  registrationForm!:any;
  count:number = 0;
  disable:boolean = false
  disableClearButton = true;


  get firstName() {
    return this.registrationForm.get('firstName')
  };

  get lastName() {
    return this.registrationForm.get('lastName')
  };

  get email() {
    return this.registrationForm.get('email')
  };

 get password() {
    return this.registrationForm.get('password')
  };

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  };


  ngOnInit() {
    this.registrationForm = this.fb.array([this.addForm()])
  };

  addForm(){
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['',[ Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required]],
    },{validator: confirmValidator('password', 'confirmPassword')}
    )
  };
  
  buttonClick(){
    this.count++;
    
    if(this.count >= 10) {
      this.disable = true;
    } else {
      this.disableClearButton = false
    }
    this.registrationForm.push(this.addForm())
  };

  clearButton() {
    this.count--
   if(this.count <= 0) {
     this.disableClearButton = true
     this.disable = false
   } else if(this.count < 10) {
     this.disable = false
   }
    this.registrationForm.removeAt(this.registrationForm.controls.length-1)
  };

  onSubmit() {
    console.log(this.registrationForm.value);
    
  }


};