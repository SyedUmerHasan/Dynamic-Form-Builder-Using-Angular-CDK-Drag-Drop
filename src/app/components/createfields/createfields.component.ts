import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createfields',
  templateUrl: './createfields.component.html',
  styleUrls: ['./createfields.component.css']
})
export class CreatefieldsComponent implements OnInit {

  form : FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      label : ["", Validators.required],
      id : ["", Validators.required],
      name: ["", Validators.required],
      type: ["", Validators.required],
      class : ["form-control", Validators.required],
      message : ["", Validators.required],
      placeholder : ["", Validators.required],
      value : ["", Validators.required]
    });
  }

  onSubmit(){
    console.log("AppComponent -> onSubmit -> this.t.controls.values", this.form.value)
  }

}
