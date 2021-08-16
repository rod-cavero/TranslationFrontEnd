import { Component, Inject} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  private translateServiceUrl: string;


  public translation: Translation;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private fb: FormBuilder) {
    //this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(":")) + ":5000/api/Translation?text=hola,target=en";
    this.translateServiceUrl = baseUrl + 'api/Translation?text=hola,target=en';
  }




  translationForm: FormGroup = this.fb.group({
    text: ['', Validators.required],
    sourceLanguage: ['auto', Validators.required],
    targetLanguage: ['en', Validators.required]
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
  
  public onSubmit() {
    if (this.translationForm.valid) {
      //let params = new HttpParams();
      //params = params.append('text', this.textc.value);
      //params = params.append('target', this.tlc.value);
      //params = params.append('source', this.slc.value);
      //this.http.get<Translation>(this.translateServiceUrl).subscribe(result => {
      //  this.translation = result;
      //}, error => console.error(error));
  


      //this.translatedText = this.translation.translated;
      //this.detected = 'Detected Language:';
      //this.source = this.translation.detectedLanguage;
    }
  }
    

}

interface Translation {
  detectedLanguage: string;
  translated: string;
}


