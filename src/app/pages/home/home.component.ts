import { Component, OnInit } from '@angular/core';
import { HomeService } from './homeService';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    
  ],
  providers: [
    HomeService,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private homeService: HomeService,
  ) {}


  ngOnInit(): void {
    this.homeService.getForcast({}).subscribe((r) => {
      console.log(r);
    });
  }
}
