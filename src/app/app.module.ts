import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileAtmComponent } from './components/mobile-atm/mobile-atm.component';
import { VirtualAtmComponent } from './components/virtual-atm/virtual-atm.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileAtmComponent,
    VirtualAtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
