import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-viewer',
  templateUrl: './blog-post-viewer.component.html',
  styleUrls: ['./blog-post-viewer.component.css']
})
export class BlogPostViewerComponent implements OnInit {
  postTitle:string = "A Review of Last Month's New Releases";
  postDate:string = "October 4, 2020";
  postAuthor:string = "Jill Doe";
  postContent:string = "Lorem ipsum dolor dit amet consectetur adipising elit, sed do eiusmos tempor incididunt ut labore et dolore magna aliqua.";
  continueReadingButtonName = "Continue Reading";

  constructor() { }

  ngOnInit(): void {
  }

}
