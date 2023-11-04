import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortablejsModule } from 'ngx-sortablejs-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SortablejsModule.forRoot({ animation: 150 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
