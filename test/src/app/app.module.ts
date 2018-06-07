import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simpleReducer, post: postReducer }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
