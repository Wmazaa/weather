import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Forecast } from '../../core/common';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { WeatherService } from '../../core/services/weather.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatCommonModule,
    NgFor,
    NgIf,
  ],
  providers: [
    WeatherService,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public currentFC: any = null;
  public dailyFC: Forecast[] = [];

  constructor(
    private weatherService: WeatherService,
  ) {
    
  }

  ngOnInit(): void {
    this.weatherService.getForcast({}).subscribe((r) => {
      this.currentFC = r[0];
      console.log(this.currentFC);
    });

    this.weatherService.getForcast5Days({}).subscribe((r) => {
      this.dailyFC = r.DailyForecasts;
      console.log(this.dailyFC);
    });
  }
}
