import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "DragAndDrop";
  
  items = [
    {
      label : "My Text Area",
      id : "textarea",
      name: "textarea",
      type: "textarea",
      class : "form-control",
      message : "Text Area is required",
      placeholder : "Enter any text",
      value : ""
    },
    {
      label : "My Text Field",
      id : "text",
      name: "text",
      type: "text",
      class : "form-control",
      message : "Text Area is required",
      placeholder : "Enter any text",
      value : ""

    },
    {
      label : "My Number Field",
      id : "numberfield",
      name: "numberfield",
      type: "number",
      class : "form-control",
      message : "Number Field is required",
      placeholder : "Enter any Number",
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
    this.t.push(this.formBuilder.group({
          label : object.label,
          id : object.id,
          name: object.name,
          type: object.type,
          class : object.class,
          message : object.message,
          placeholder : object.placeholder,
          value : [null, Validators.required]          
        }));
    }
    
}
