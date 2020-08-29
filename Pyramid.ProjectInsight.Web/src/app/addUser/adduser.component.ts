import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'addUser.component.html',
  styleUrls:['addUser.component.css']
  
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    loading = false;
    submitted = false;
  returnUrl: string;
  userList: any=[];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
       
      this.userForm = formBuilder.group({
        'firstName': [null,Validators.compose([Validators.required])],
        'lastName': [null, Validators.compose([Validators.required])],
        'userName': [null, Validators.compose([Validators.required])],
        'password': [null, Validators.compose([Validators.required])],
        'confirmPassword': [null, Validators.compose([Validators.required])],
        'isActive': [null]
      })
    }

    ngOnInit() {
       
  }

  addUser() {
    if (this.userForm.valid) {
      this.userList.push({
        "userName": this.userForm.controls["userName"].value,
        "firstName": this.userForm.controls["firstName"].value,
        "lastName": this.userForm.controls["firstName"].value,
        "isActive": this.userForm.controls["isActive"].value
      });
    }
    this.reset();
  }

  reset() {
    this.userForm.reset();
  }

   
}
