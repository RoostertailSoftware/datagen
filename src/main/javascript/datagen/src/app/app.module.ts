import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

let _imports: any[] = [
  CommonModule,
  AngularMaterialModule,
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule
];

let _schemas: any[] =[ ]

/* -- `declare` components here -- */

import { AppComponent,
 } from './components' ;


let _declarations: any[] = [
  AppComponent,
]

/* -- Services -- */

let _providers: any[ ] = [
]

let _bootstrap: any[] = [
  AppComponent
];

@NgModule({
  declarations: _declarations,
  imports: _imports,
  providers: _providers,
  bootstrap: _bootstrap,
  schemas: _schemas
})
export class AppModule { }
