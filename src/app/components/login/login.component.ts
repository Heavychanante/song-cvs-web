import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
} )
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor( private fb: FormBuilder,
                 private router: Router ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    public onSubmit( login: any ) {
        sessionStorage.setItem( 'userInfo', login.username );
        this.router.navigate(['/songs']);
    }
}
