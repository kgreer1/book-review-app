import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-post-editor',
  templateUrl: './blog-post-editor.component.html',
  styleUrls: ['./blog-post-editor.component.css']
})
export class BlogPostEditorComponent implements OnInit {
  blogForm: FormGroup;
  example = { postDate: "", postAuthor: "", postTitle: "", postContent: "" };
  formName:string = 'Submit New Blog Post';
  resetButton = 'Reset Form';
  submitButton = 'Submit';
  
  constructor(builder: FormBuilder) {
    this.blogForm = builder.group({
      postDate: [""],
      postAuthor: [""],
      postTitle: [""],
      postContent: [""]
    });
  }

  addPost() {
    console.log('Form submitted.');
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
