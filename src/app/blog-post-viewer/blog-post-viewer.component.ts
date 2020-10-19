import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-blog-post-viewer',
  templateUrl: './blog-post-viewer.component.html',
  styleUrls: ['./blog-post-viewer.component.css']
})
export class BlogPostViewerComponent implements OnInit {
  //postTitle:string = "A Review of Last Month's New Releases";
  //postDate:string = "October 4, 2020";
  //postAuthor:string = "Jill Doe";
  //postContent:string = "Lorem ipsum dolor dit amet consectetur adipising elit, sed do eiusmos tempor incididunt ut labore et dolore magna aliqua.";
  //continueReadingButtonName = "Continue Reading";

  //declare variable to hold response
  public news;

  //initialize the call using NewsService
  constructor(private _myService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this._myService.getNews().subscribe(
      //read data and assign to public variable news
      data => { this.news = data },
      err => console.log(err),
      () => console.log('finished loading')
    );
  }
}
