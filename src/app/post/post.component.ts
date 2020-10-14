import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  form = this.fb.group ({
    content: [''],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
