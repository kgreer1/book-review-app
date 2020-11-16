import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPostEditorComponent } from './blog-post-editor/blog-post-editor.component';
import { BlogPostViewerComponent } from './blog-post-viewer/blog-post-viewer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'', //default component
    component: BlogPostViewerComponent },
  {
    path:'news', //view all blog/news posts
    component: BlogPostViewerComponent },
  {
    path:'news/add-post', //add blog/news post
    component: BlogPostEditorComponent },
  {
    path:'news/edit-post/:_id', //edit blog/news post
    component: BlogPostEditorComponent },
  {
    path: '**', //when path cannot be found
    component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogPostEditorComponent,
    BlogPostViewerComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
