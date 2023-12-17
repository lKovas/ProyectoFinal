import { Routes } from '@angular/router';
import{DungeonMasterComponent} from "./dungeonMaster/dungeonMaster.component"
import{HomeComponent} from "./home/home.component"
import{CharacterComponent} from "./character/character.component"

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'character',
        component: CharacterComponent
      },
      {
        path: 'DM',
        component: DungeonMasterComponent
      },
];
