import { Component } from "@angular/core";
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DragAndDrop";
  // tslint:disable:max-line-length
  movies = [
    {
      title: "Text Field",
      field: "text"
    },
    {
      title: "Number Field",
      field: "number"
    },
    {
      title: "Password Field",
      field: "password"
    },
    {
      title: "Text Area",
      field: "textarea"
    }
  ];
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
