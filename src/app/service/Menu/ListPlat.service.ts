import { Injectable } from "@angular/core";
import { IMenuPlat } from "src/app/menu/MenuPlat.service";

@Injectable({
    providedIn : "root"
})

export class MenuPlatList{
    getMenuPlat() : IMenuPlat[]{
        return[
            {
                "menuname": "Fat Tuesday Salad",
                "description": "Poitrine de poulet cajun tranché chaud à la Nouvelle-Orléans avec mesclun, concombres et œufs durs avec une vinaigrette chaude et épicée à la moutarde et au miel garnie de bacon.",
                "prix": 17.95,
                "imageUrl": "assets/image/FatTuesdaySalad.jpg"
            },
            {
                "menuname": "Braised Boneless Beef Short Ribs",
                "description": "Braisé bas et lent, il en résulte une viande profondément parfumée, sublimement succulente et tendre comme on peut l'imaginer, tout en conservant une texture merveilleuse. Servi sur un lit de pommes de terre écrasées à l'ail. Servi avec choix d'accompagnement supplémentaire.",
                "prix": 25.95,
                "imageUrl": "assets/image/BraisedBonelessBeefShortRibs.jpg"
            },
            {
                "menuname": "Jambalaya",
                "description": "Crevettes, poulet, andouille, riz et légumes et épices traditionnels jambalaya. Garni de confettis de poivrons rouges et jaunes sucrés.",
                "prix": 15.95,
                "imageUrl": "assets/image/Jambalaya.jpg"
            },
            {
                "menuname": "Stuffed Jumbo Shrimp",
                "description": "Chair de crabe, pétoncles hachés, champignons, fromage Jack, chapelure assaisonnée, farce au vin blanc et au beurre.",
                "prix": 12.95,
                "imageUrl": "assets/image/StuffedJumboShrimp.jpg"
            },
            {
                "menuname": "Sirloin Steak Tips",
                "description": "Morceaux de surlonge marinés tendres et savoureux sautés à l'ail et au poivre noir,garnis de champignons de Paris et d'une demi-glace de bœuf. (Le degré de cuisson variera légèrement en raison des variations de taille des morceaux). Accompagné d'une purée de pommes de terre à l'ail dopé au Gorgonzola. Servi avec choix d'accompagnement supplémentaire.",
                "prix": 25.95,
                "imageUrl": "assets/image/SirloinSteakTips.jpg"
            },
            {
                "menuname": "Pasta Pomodoro",
                "description": "Rigatoni à l'ail frais rôti avec une sauce légère d'huile d'olive extra vierge de Californie, tomates fraîches hachées, basilic, ail, poivre noir et une pincée de piment rouge broyé. Garni de tomates séchées au soleil et de copeaux de parmesan.",
                "prix": 14.95,
                "imageUrl": "assets/image/PastaPomodoro.jpg"
            },
        ]
    }
}