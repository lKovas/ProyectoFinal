import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'
import { DataService } from '../services/image.service';

@Component({
  selector: 'app-dungeonMaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dungeonMaster.component.html',
  styleUrl: './dungeonMaster.component.css'
})
export class DungeonMasterComponent implements OnInit {
  nameCharacter: string | undefined;
  characters: any;
  id: any;
  displayedCharacter: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    this.dataService.getImages().subscribe(data => {
      this.displayedCharacter = data.find((character: { name: string; }) => character.name === 'Kovas Leal Rojas');
    });
  }

}
