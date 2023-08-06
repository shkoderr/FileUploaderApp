import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragDropFileDirective, FileUploaderComponent } from 'src/file-uploader';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    DragDropFileDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
