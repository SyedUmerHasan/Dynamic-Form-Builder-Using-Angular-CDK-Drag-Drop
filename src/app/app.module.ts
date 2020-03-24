import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { CreatefieldsComponent } from './components/createfields/createfields.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  
  { 
    path: '',
    redirectTo: 'form/create', 
    pathMatch: 'full' 
  },
  {
    path: 'form/create',
    component: CreateFormComponent
  },
  {
    path: 'fields/create',
    component: CreatefieldsComponent
  },
  {
    path: 'form/:id',
    component: ShowFormComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent, 
    CreatefieldsComponent,
    CreateFormComponent,
    ShowFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
