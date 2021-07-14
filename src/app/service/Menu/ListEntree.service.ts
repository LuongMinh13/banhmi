import { Injectable } from "@angular/core";
import { IMenuEntree } from "src/app/menu/MenuEntree.service";

@Injectable({
    providedIn: "root"
})

export class MenuEntreeList {
    getMenuEntree(): IMenuEntree[] {
        return [
            {
                "menuname": "Fried Shrimp",
                "description": "Crevettes rouges argentines élevées de manière durable, frites dorées et servies avec de la mayonnaise chipotle pour tremper.",
                "prix": 9.95,
                "imageUrl": "assets/image/FriedShrimp.jpg"
            },
            {
                "menuname": "Tuscan Bruschetta",
                "description": "Pain italien tranché croustillant garni de basilic, d'huile d'olive extra vierge, de tomates hachées, d'ail et de fromage mozzarella frais. Cuit jusqu'à ce qu'il soit bien croustillant et servi avec une réduction de balsamique.",
                "prix": 8.95,
                "imageUrl": "assets/image/TuscanBruschetta.jpg"
            },
            {
                "menuname": "Quesadilla",
                "description": "Jack et fromage cheddar, piments verts doux hachés dans une tortilla de farine grillée à la poêle. Servi avec crème sure, guacamole et pico de gallo frais.",
                "prix": 7.95,
                "imageUrl": "assets/image/SweetHeatMargarita.jpg"
            },
            {
                "menuname": "Wings",
                "description": "Une douzaine de nos ailes de poulet croustillantes et savoureuses. Sélectionnez 1 de nos 4 assaisonnements.",
                "prix": 9.95,
                "imageUrl": "assets/image/Wings.jpg"
            },
            {
                "menuname": "Ultimate Nacho Platter",
                "description": "Croustilles tortilla de maïs maison, fromage cheddar-Jack fondu, salsa chili douce d'Anaheim, haricots frits, guacamole &amp; sour cream",
                "prix": 8.95,
                "imageUrl": "assets/image/UltimateNachoPlatter.jpg"
            },
            {
                "menuname": "Stuffed Clams",
                "description": "Trois gros farcis aux palourdes hachées, saucisse portugaise chouriço moyennement épicée, bacon haché, oignons, poivrons, une touche de piment rouge broyé, chapelure et épices, garnis de bacon.",
                "prix": 10,
                "imageUrl": "assets/image/StuffedClams.jpg"
            },
        ]
    }
}