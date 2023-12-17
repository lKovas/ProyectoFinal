import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { CommonModule } from '@angular/common'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  joke: any | undefined;
  categories: any[] | undefined;

  constructor(
    private glabalService: GlobalService,
    private router: Router,) { }

  ngOnInit(): void {
    this.glabalService.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.glabalService.getJokeRandom().subscribe(data => {
      console.log(data)
      this.joke = data;
    });
  }

  searchJoke(category: string) {
    this.glabalService.getByCategory(category).subscribe(data => {
      this.joke = this.getRandomValueFromArray(data.result);
    });
  }

  next(id: any) {
    this.router.navigate(["character"], { queryParams: { id: id } });
  };


  getRandomValueFromArray<T>(array: T[]): T | undefined {
    if (array.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}