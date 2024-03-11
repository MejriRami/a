import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../indicators.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public indicatorsList: any[] = [];

  constructor(private indicatorsService: IndicatorsService) { }

  ngOnInit(): void {
    this.fetchIndicators();
  }

  fetchIndicators() {
    this.indicatorsService.getIndicatorsFromDatabase().subscribe(
      indicators => {
        this.indicatorsList = indicators;
      },
      error => {
        console.error('Error fetching indicators:', error);
      }
    );
  }

  Search() {
    // Implement search functionality if needed
  }
}
