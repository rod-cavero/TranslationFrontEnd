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
  //variables to be expost in the template
  public translatedText = '';
  public detected = '';
  public source = '';
  //the url for the translation service
  private translateServiceUrl: string;
  //return interface from the service
  private translation: Translation;


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder) {
    //set the url assuming both services are running in the same machine
    //this is only por demo porpuses
    this.translateServiceUrl = baseUrl.substr(0, baseUrl.lastIndexOf(':')) + ':5000/api/Translation';
    //this.translateServiceUrl = baseUrl + 'api/Translation';
  }

  translationForm: FormGroup = this.formBuilder.group({
    //set the controls from the form
    textControl: ['', Validators.required],
    sourceLanguageControl: ['auto', Validators.required],
    targetLanguageControl: ['en', Validators.required]
  });

  //getters for all the controls in the form
  get textControl() {
    return this.translationForm.get('textControl') as FormControl;
  }
  get sourceLanguageControl() {
    return this.translationForm.get('sourceLanguageControl') as FormControl;
  }
  get targetLanguageControl() {
    return this.translationForm.get('targetLanguageControl') as FormControl;
  }


  public Translate() {
    //validete that the user had introduce some text and select target language
    if (this.translationForm.valid) {
      //set the query string to invoke the service
      let params = new HttpParams();
      params = params.append('text', this.textControl.value);
      params = params.append('target', this.targetLanguageControl.value);
      params = params.append('source', this.sourceLanguageControl.value);

      //call the service
      this.http.get<Translation>(this.translateServiceUrl, {params: params}).subscribe(result => {
        this.translation = result;
        // set the result in the UI
        this.translatedText = this.translation.translated;
        this.detected = 'Detected Language: ';
        this.source = this.translation.detectedLanguage;
      }, error => {
        console.error(error)
      });
    }
  }
    

}




