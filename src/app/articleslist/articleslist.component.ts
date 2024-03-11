import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articleslist',
  templateUrl: './articleslist.component.html',
  styleUrls: ['./articleslist.component.css']
})
export class ArticleslistComponent implements OnInit {
  articles: any[] = []; // Assuming articles are fetched and assigned to this array

  constructor(private router : Router) { }

  ngOnInit(): void {
    // Initialize component
  }

  viewArticle(article: any) {
    // Functionality to view a specific article
  }

  previousPage() {
    // Functionality for navigating to the previous page
  }

  nextPage() {
    // Functionality for navigating to the next page
  }
  
}
