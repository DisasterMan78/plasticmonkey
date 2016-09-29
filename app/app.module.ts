import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }    from './app.component';
import { HeaderComponent } from './scaffold/header.component';
import { NavComponent } from './scaffold/nav.component';
import { FooterComponent } from './scaffold/footer.component';

@NgModule({
  imports      :
  [
      BrowserModule,
      FormsModule
  ],
  declarations :
  [
      AppComponent,
      HeaderComponent,
      NavComponent,
      FooterComponent
  ],
  bootstrap    : [ AppComponent ]
})
export class AppModule { }
