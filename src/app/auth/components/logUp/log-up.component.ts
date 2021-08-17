import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.scss']
})
export class LogUpComponent implements OnInit {

  registerForm: FormGroup;
  errors : any = null;

  constructor(
    public router     : Router,
    public fb         : FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name :    [''],
      email:    [''],
      password: [''],
      password_confirmation!: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error);
        
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset()
        this.router.navigate(['login']);
      }
    )
  }
}
