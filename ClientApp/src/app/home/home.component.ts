import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public translatedText = '';
  public detected = '';
  public source = '';

  isSubmitted = false;

  constructor(public fb: FormBuilder) {}

  translationForm: FormGroup = this.fb.group({
    text: ['', Validators.required],
    sourceLanguage: ['', Validators.required],
    targetLanguage: ['', Validators.required]
  });

  get textc() {
    return this.translationForm.get('text') as FormControl;
  }
  get slc() {
    return this.translationForm.get('sourceLanguage') as FormControl;
  }
  get tlc() {
    return this.translationForm.get('targetLanguage') as FormControl;
  }
  
  public translate() {
    if (this.translationForm.valid) {
      this.translatedText = this.textc.value;
      this.detected = this.slc.value;
      this.source = this.tlc.value;
    }
  }
    

 }

