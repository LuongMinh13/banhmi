import { Injectable } from "@angular/core";
import {IMenuCocktails } from "src/app/menu/MenuCocktails.service";

@Injectable({
    providedIn: 'root'
})
export class MenuCocktailsList{
    getMenuCocktails() : IMenuCocktails[]{
        return[
            {
                "menuname": "Chocolate Martini",
                "description": "Tito's Vodka et Crème de Cacao Blanche saupoudrées de chocolat râpé à la main.",
                "prix": 10,
                "imageUrl" : "assets/image/ChocolateMartini.jpg"
            },
            {
                "menuname": "Summer Breeze Martini",
                "description": "Hendrick's Gin, liqueur de fleur de sureau St. Germain et Brancot Sauvignon Blanc avec un flotteur de Cristalino Cava Brut.",
                "prix": 10,
                "imageUrl" : "assets/image/SummerBreezeMartini.jpg"
            },
            {
                "menuname": "Sweet Heat Margarita",
                "description": "Tequila infusée au jalapeño, triple sec, jus d'ananas, citron vert.",
                "prix": 9,
                "imageUrl" : "assets/image/SweetHeatMargarita.jpg"
            },
            {
                "menuname": "Prickly Pear",
                "description": "New Amsterdam Vodka et liqueur de poire dans un verre bordé de sucre.",
                "prix": 10,
                "imageUrl" : "assets/image/PricklyPear.jpg"
            },
            {
                "menuname": "Classic Martini",
                "description": "Seagrams Gin, Dry Vermouth, jus de cornichon, jus d'olive.",
                "prix": 9,
                "imageUrl" : "assets/image/ClassicMartini.jpg"
            },
            {
                "menuname": "Ruby Red Rosemary Refresher",
                "description": "Vodka au romarin infusée maison, liqueur de fleur de sureau Saint-Germain, jus de pamplemousse et un soupçon de soda.",
                "prix": 10,
                "imageUrl" : "assets/image/RubyRedRosemaryRefresher.jpg"
            },

            

        ]
    }
}