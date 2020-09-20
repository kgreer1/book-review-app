import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-blog-post-editor',
  templateUrl: './blog-post-editor.component.html',
  styleUrls: ['./blog-post-editor.component.css']
})
export class BlogPostEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  blogForm = this.fb.group({
    postDate: [''],
    postAuthor: [''],
    postTitle: [''],
    postContent: [''],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.blogForm.value);
    //console.log("Post Date: " + this.blogForm.controls['postDate'].value);
  }

}
