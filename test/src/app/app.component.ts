import { Component } from '@angular/core';

import * as PostActions from './actions/post.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post$: Observable<Post>;
  message$: Observable<string>;

  text: string;

  constructor(private store: Store<AppState>) {
    console.log('app component ');
    this.post$ = store.select('post');

  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  upvote() {
    this.store.dispatch(new PostActions.UpVote());
  }

  downvote() {
    this.store.dispatch(new PostActions.DownVote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

}
