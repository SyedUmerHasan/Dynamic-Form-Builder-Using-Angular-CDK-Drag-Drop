import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { FormItemsService } from '../../_services/form-items.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-createfields',
  templateUrl: './createfields.component.html',
  styleUrls: ['./createfields.component.css']
})
export class CreatefieldsComponent implements OnInit {

  showSuccessStatus =  null;
  showErrorStatus = null;
  showSuccessMessage =  null;
  showErrorMessage = null;
  submitted = false;
  formError = false;
  
  optionshow = false;

  form : FormGroup;
  constructor(private formBuilder: FormBuilder,private formItemsService:  FormItemsService) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      label : ["", Validators.required],
      id : ["", Validators.required],
      name: ["", Validators.required],
      type: ["", Validators.required],
      class : ["form-control", Validators.required],
      message : ["", Validators.required],
      placeholder : ["", Validators.required],
      value : [""]
    });
  }

  onChange(deviceValue) {
      if(deviceValue == "select"){
        this.optionshow = true;
      } else {
        this.optionshow = false;
      }
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid ) {
      this.formError = true;
      return;
    }
    console.log("AppComponent -> onSubmit -> this.t.controls.values", this.form.value)
    this.formItemsService.saveFormFields(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.showSuccessStatus =  true;
          this.showSuccessMessage = 'Form Fields has been added successfully';
          this.showErrorStatus =  false;
          this.submitted = false;
          this.form.reset();
        },
        error => {
          this.showSuccessStatus  = false;
          this.showErrorStatus  = true;
          this.showErrorMessage = 'Form Fields has not been added, can be seen in browser console';
          console.log('Error in creating : ', error);
        });
  }

}
