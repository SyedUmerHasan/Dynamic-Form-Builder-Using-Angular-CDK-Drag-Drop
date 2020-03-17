import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";
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
export class AppComponent {
  title = "DragAndDrop";
  items = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    { type: "text", name: "email", label: "Email", value: "", required: true },
    { type: "file", name: "picture", label: "Picture", required: true },
    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" }
      ]
    },
    {
      type: "radio",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [
        { key: "m", label: "Male" },
        { key: "f", label: "Female" }
      ]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [
        { key: "f", label: "Fishing" },
        { key: "c", label: "Cooking" }
      ]
    }
  ];
  unsubcribe: any;
  form: FormGroup;
  field = [];
  constructor() {
    // this.field = this.items;
    console.log("AppComponent -> constructor -> this.field", this.field);
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.field))
    });
    this.unsubcribe = this.form.valueChanges.subscribe(update => {
      // console.log(update);
      // console.log("AppComponent -> constructor -> update", update);
      this.field = JSON.parse(update.field);
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
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log("AppComponent -> drop -> this.getFields()", this.getFields());
    }
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    return this.field;
  }
  getStatus() {
    if (this.field.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
  ngDestroy() {
    this.unsubcribe();
  }
}
