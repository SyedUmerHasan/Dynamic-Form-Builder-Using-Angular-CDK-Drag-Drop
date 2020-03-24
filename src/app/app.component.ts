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
      name: "Text Area",
      type: "textarea"
    },
    {
      name: "Text Field",
      type: "text"
    },
    {
      name: "Password Field",
      type: "password"
    },
    {
      name: "Number Field",
      type: "number"
    }
  ];

  basket = [];

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
    }
  }
}
