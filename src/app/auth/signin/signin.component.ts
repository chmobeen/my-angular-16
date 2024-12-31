import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  clientName: string = environment.client_name;
  logo_img: string = `assets/${environment.client_img_folder}/comverse_icon.png`;


  loading: boolean = false;
  formError: string = "";

  signinForm = this.fb.group({
    username_or_email: ['', [Validators.required]],
    password: ['', [Validators.required]],

  })


}
