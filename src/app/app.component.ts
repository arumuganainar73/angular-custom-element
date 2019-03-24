import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button (click)="popup.showAsElement(input.value)">Show as element</button>
    <button (click)="popup.showAsLoginComponent(input.value)">Show as Login</button>
    
  `,
})
export class AppComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);

    // Convert `loginComponent` to a custom element.
    const LoginElement = createCustomElement(LoginComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('login-element', LoginElement);


  }
}