import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPostEditorComponent } from './blog-post-editor/blog-post-editor.component';
import { BlogPostViewerComponent } from './blog-post-viewer/blog-post-viewer.component';
import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostEditorComponent,
    BlogPostViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
