import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public x: Translation;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<any>('http://localhost:5000/api/Translation?text=hola&target=en').subscribe(result => {
      console.log(result);

    }, error => {
      console.error(error);
    }
    );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Translation {
  detectedLanguage: string;
  translated: string;
}
