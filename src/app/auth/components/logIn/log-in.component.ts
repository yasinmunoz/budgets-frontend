import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  errors: any = null;

  /* token
  La tokenización, cuando se aplica a la seguridad de los datos, 
  es el proceso de sustitución de un elemento de datos sensible 
  por un equivalente no sensible denominado token, que no tiene 
  un significado o valor extrínseco o explotable
   */

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public auth_Service: AuthService,
    private _toastSvc: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() { }

  async onSubmit() {
    try {
      const result: any = await this.auth_Service.login(this.loginForm.value);

      this._toastSvc.success('Data correct','Subarashii');

      this.router.navigate(['users', 'profile', result.user.id]);
    } catch (error) {
      this.errors = error.error;
      this.loginForm.reset()
    }
  }



  /* async save() {
    const response = await this.auth_Service.signin(this.loginForm.value);
  } */
}
