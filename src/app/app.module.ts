import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
