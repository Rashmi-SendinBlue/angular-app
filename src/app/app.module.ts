import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    // AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  entryComponents: [BookListComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap(){
    // const el = createCustomElement(AppComponent, {injector: this.injector});
    // customElements.define('angular-app', el);
    const el = createCustomElement(BookListComponent, {injector: this.injector});
    customElements.define('book-list', el);
  }
}
