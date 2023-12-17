import { Component ,OnInit } from '@angular/core';
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
export class HomeComponent  implements OnInit{
  joke: any[] | undefined;
  nameCharacter: string | undefined ;

  constructor(
    private glabalService: GlobalService,
    private router: Router,) { }

  ngOnInit(): void {
    this.glabalService.getCategories().subscribe(data => {
      console.log(data)
    });
    this.glabalService.getJokeRandom().subscribe(data => {
      console.log(data)
    });
  }

  next(id : any){
    this.router.navigate(["character"], { queryParams: { id: id } });
  };
}
