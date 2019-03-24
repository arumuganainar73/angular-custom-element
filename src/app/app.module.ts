import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';
import { LoginComponent } from './login/login.component';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [PopupService],
  declarations: [AppComponent, PopupComponent, LoginComponent],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, LoginComponent],
})
export class AppModule {
}
