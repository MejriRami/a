import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public indicatorsList: any[] = [];
  public subIndicatorsList: string[] = [];
  public marketsList: string[] = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchIndicators();
    this.fetchMarkets();
  }

  fetchIndicators() {
    this.dataService.getIndicators().subscribe(
      indicators => {
        this.indicatorsList = indicators;
      },
      error => {
        console.error('Error fetching indicators:', error);
      }
    );
  }

  fetchMarkets() {
    this.dataService.getMarkets().subscribe(
      markets => {
        this.marketsList = markets;
      },
      error => {
        console.error('Error fetching markets:', error);
      }
    );
  }

  onSelectIndicator(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const indicatorId = target.value;
    if (indicatorId) {
      this.dataService.getSubIndicators(indicatorId).subscribe(
        subIndicators => {
          this.subIndicatorsList = subIndicators;
        },
        error => {
          console.error('Error fetching sub-indicators:', error);
        }
      );
    } else {
      this.subIndicatorsList = [];
    }
  }

  Search(): void {
    this.router.navigate(['/articleslist']);
  }
}
