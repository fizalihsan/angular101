import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

// @Component is an annotation - a feature of TypeScript
@Component({
    selector: 'joke', // this tells Angular which tag in HTML to use this component
    template: `
    <h1> {{setup}}</h1>
    <p> {{punchline}}</p>
    <h3>{{1 + 11}}</h3>
    `
})
// this is the root component for our application. Other components can extend this to create sub-tags within 'joke'
class JokeComponent {
    //below are the attributes/properties of the class
    setup: string;
    punchline: string;

    constructor(){
        this.setup = "Hello";
        this.punchline = "World";
    }
}


let joke = new JokeComponent();
console.log(joke.setup);
console.log(joke.punchline);

@NgModule({
    // List of other ng-modules need to be imported. Almost every application's root module should import 'BrowserModule'
    // which contains all the necessary code to run Angular app in a browser
    imports: [BrowserModule],
    declarations: [JokeComponent],
    bootstrap: [JokeComponent]
})
class JokeAppModule {

}

// Bootstrap the module here
// Since Angular 2, bootstrap is specific to a particular version of the device it runs. In this case, it is a
// browser. Similarly, for mobile devices, a separate type of bootstrap applies.
platformBrowserDynamic().bootstrapModule(JokeAppModule);