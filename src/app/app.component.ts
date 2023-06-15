import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test_password';
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void{
    this.form = this.fb.group({
      password: ['', Validators.required ]
    })
  }
  onStrengthChange(score: any) {
    console.log(score);
  }
}
