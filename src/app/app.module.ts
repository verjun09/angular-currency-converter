import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { currencyPipeObj } from './shared/currency.pipe';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';


@NgModule({
  declarations: [AppComponent,currencyPipeObj, CurrencyConverterComponent],
  imports: [BrowserModule, AppRoutingModule, AngularMaterialModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
