import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  form: FormGroup;
  loading = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
      this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      venueName: ['', Validators.required],
      streetAddress: '',
      zipCode: '',
      phone: '',
      password: '',
      confirmPassword: '',
      image: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('image').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
