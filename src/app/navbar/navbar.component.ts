import { Component,OnInit } from '@angular/core';
import { Router,  } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{ 

  constructor(
    private router: Router,
  ){

  }

ngOnInit(): void {
  
}

navigateToRoute(route: string) {
  switch (route) {
    case 'route1':
      this.router.navigate(['home']);
      break;
    case 'route2':
      this.router.navigate(['character']);
      break;
    case 'route3':
      this.router.navigate(['DM']);
      break;
    default:
      break;
  }
}

}
