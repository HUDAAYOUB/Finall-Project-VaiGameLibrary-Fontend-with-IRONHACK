// Components/newuser/newuser.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent {
  registerForm: FormGroup;
  step: number = 1;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onSubmit() {
   
    if (this.registerForm.valid) {
 
      console.log('Form submitted:', this.registerForm.value);
    } else {
      
      console.log('Form is invalid');
    }
  }
}
