import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DataService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit {
  nameCharacter: string | undefined;
  characters: any;
  id: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.id = params.get('id') || 0;
        this.dataService.getImages().subscribe(data => {
          this.characters = this.id == 0? data : data.filter((item : any) => item.number == this.id);
        });
      });

  }



}
