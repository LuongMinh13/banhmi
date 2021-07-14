import { Component, OnInit } from '@angular/core';
import { MenuCocktailsList } from '../service/Menu/ListCocktails.service';
import { MenuEntreeList } from '../service/Menu/ListEntree.service';
import { MenuPlatList } from '../service/Menu/ListPlat.service';
import { IMenuCocktails } from './MenuCocktails.service';
import { IMenuEntree } from './MenuEntree.service';
import { IMenuPlat } from './MenuPlat.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private menucocktailservice: MenuCocktailsList,
    private menuentreeservice: MenuEntreeList,
    private menuplatservice: MenuPlatList
  ) { }

  imageWidth = 150;
  imageMargin = 2;
  imageHeight = 100;

  menuplats: IMenuPlat[] = []
  menucocktails: IMenuCocktails[] = []
  menuentrees: IMenuEntree[] = []
  ngOnInit(): void {
    this.menucocktails = this.menucocktailservice.getMenuCocktails();
    this.menuentrees = this.menuentreeservice.getMenuEntree();
    this.menuplats = this.menuplatservice.getMenuPlat();
  }

}
