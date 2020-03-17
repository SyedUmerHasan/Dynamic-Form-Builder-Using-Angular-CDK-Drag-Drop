import { DynamicFormBuilderModule } from "./dynamic-form-builder/dynamic-form-builder.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
