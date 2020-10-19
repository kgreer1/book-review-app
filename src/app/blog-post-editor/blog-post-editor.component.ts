import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-blog-post-editor',
  templateUrl: './blog-post-editor.component.html',
  styleUrls: ['./blog-post-editor.component.css']
})
export class BlogPostEditorComponent implements OnInit {
  blogForm: FormGroup;
  formName:string = 'Submit A News Post';
  resetButton = 'Reset Form';
  submitButton = 'Submit';

  @Input() postDate:string;
  @Input() postAuthor:string;
  @Input() postTitle:string;
  @Input() postContent:string;
  
  constructor(private _myService: NewsService, builder: FormBuilder) {
    this.blogForm = builder.group({
      postDate: [""],
      postAuthor: [""],
      postTitle: [""],
      postContent: [""]
    });
  }

  addPost() {
    this._myService.addNewsPost(this.postDate, this.postAuthor, this.postTitle, this.postContent);
    console.log('Post submitted.');
  }

  resetForm() {
    postDate: "";
    postAuthor: "";
    postTitle: "";
    postContent: "";
    console.log('Form reset.');
  }

  ngOnInit(): void {
  }

}
