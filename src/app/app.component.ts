import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ExampleComponent } from './example/example.component';

@Component({
    selector: 'app-component',
    // Using backticks allows multi-line templates.
    // This should be in a separate file, but is inline as an example.
    template: `
    <div class="container">
        <h1>My Angular 2 Base App</h1>
        <p>
            <a [routerLink]="['/']">Home</a> |
            <a [routerLink]="['/about']">About</a>
        </p>
        <router-outlet></router-outlet>
    </div>`,
    directives: [
        ExampleComponent,
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    public isTestable: boolean = true;

    // Angular 2 uses a tree of components to create an app.
    // This component is the root node of that tree.
}

