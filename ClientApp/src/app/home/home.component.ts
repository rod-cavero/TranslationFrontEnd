import { Component, Inject} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Translation } from '../interfaces/translation.interface';

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
  private translation: Translation;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private fb: FormBuilder) {
    this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(':')) + ':5000/api/Translation';
    //this.translateServiceUrl = baseUrl + 'api/Translation';
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
  
  public Translate() {
    if (this.translationForm.valid) {
      let params = new HttpParams();
      params = params.append('text', this.textc.value);
      params = params.append('target', this.tlc.value);
      params = params.append('source', this.slc.value);

      this.http.get<Translation>(this.translateServiceUrl, {params: params}).subscribe(result => {
        this.translation = result;
        this.translatedText = this.translation.translated;
        this.detected = 'Detected Language: ';
        this.source = this.translation.detectedLanguage;
      }, error => {
        console.error(error)
      });
    }
  }
    

}




