import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

import {Http} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  bids: any[];
  textFrom: number = 0;
  textTo: number = 0;

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, private http:Http) {
    http.get('assets/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.bids = data.bids;
          console.log(this.bids);

          this.bids[4][2] = 'selected';
        },
        err => console.log(err),
        () => console.log('Completed'));
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
