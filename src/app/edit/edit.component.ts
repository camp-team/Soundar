import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form = this.fb.group({
    content: [''],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
