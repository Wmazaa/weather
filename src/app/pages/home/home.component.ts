import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Forecast } from '../../core/common';
import { WeatherService } from '../../core/services/weather.service';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatCommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
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
  public cities: any[] = [];

  constructor(
    private weatherService: WeatherService,
  ) {
    
  }

  ngOnInit(): void {
    this.weatherService.getForcast({}).subscribe((r) => {
      this.currentFC = r[0];
    });

    this.weatherService.getForcast5Days({}).subscribe((r) => {
      this.dailyFC = r.DailyForecasts;
    });
  }
}
