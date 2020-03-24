import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem
} from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  textfield = 1;
  numberfield = 1;
  selectfield = 1;
  textAreafield = 1;
  optionArray = [];
  items = [
    {
      label : "Text Area",
      id : "textarea",
      name: "textarea",
      type: "textarea",
      class : "form-control",
      message : "Text Area is required",
      placeholder : "Enter any text",
      value : ""
    },
    {
      label : "Text Field",
      id : "text",
      name: "text",
      type: "text",
      class : "form-control",
      message : "Text Area is required",
      placeholder : "Enter any text",
      value : ""

    },
    {
      label : "Number Field",
      id : "numberfield",
      name: "numberfield",
      type: "number",
      class : "form-control",
      message : "Number Field is required",
      placeholder : "Enter any Number",
      value : ""
    },
    {
      label : "Select Field",
      id : "selectfield",
      name: "selectfield",
      type: "select",
      class : "form-control",
      message : "Select field is required",
      placeholder : "Select",
      options : [
        {
          name : "one",
          value : "one"
        },
        {
          name : "two",
          value : "two"
        },
        {
          name : "three",
          value : "three"
        },
      ],
      value : ""
    },
  ];
  form: FormGroup;
  basket = [];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      formfields : new FormArray([])
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
      this.addFields(event.previousContainer.data[event.previousIndex]);

    }
    console.log(this.basket);
  }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    get t() { return this.f.formfields as FormArray; }

  addFields(object) {
    let index = null;
    if(object.options){
      this.optionArray.push(object.options);
      index = this.optionArray.indexOf(object.options);
    }

    this.t.push(this.formBuilder.group({
          label : object.label,
          id : object.id,
          name: object.name,
          type: object.type,
          class : object.class,
          message : object.message,
          placeholder : object.placeholder,
          value : [object.value, Validators.required],
          options : index 
        }));
    }
    
    onSubmit(){
      console.log("AppComponent -> onSubmit -> this.t.controls.values", this.form)
    }

}
