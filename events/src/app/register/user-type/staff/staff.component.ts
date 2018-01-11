import { Router } from '@angular/router';
import { AuthServiceService } from './../../../auth-service.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  form: FormGroup;
  loading = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthServiceService) {
      this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      staffName: ['', Validators.required],
      streetAddress: '',
      zipCode: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      image: null,
      type: 'staff'
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    
    input.append('firstName', this.form.get('firstName').value);
    input.append('lastName', this.form.get('lastName').value);
    input.append('staffName', this.form.get('staffName').value);
    input.append('streetAddress', this.form.get('streetAddress').value);
    input.append('zipCode', this.form.get('zipCode').value);
    input.append('image', this.form.get('image').value);
    input.append('phone', this.form.get('phone').value);
    input.append('password', this.form.get('password').value);
    input.append('email', this.form.get('email').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
      console.log(formModel);

    this.auth.registerStaff(formModel).subscribe(user => {
      this.auth.isLoggedIn();
      console.log(user, 'client side user');
      const result = user.json();
      if (result.user === true) {
          this.loading = false;
          this.router.navigateByUrl('/');
      }else {
          this.loading = false;
          this.router.navigateByUrl('/');
      }
    });
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }



}
