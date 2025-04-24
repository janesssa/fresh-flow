import { Recipe } from '../types';

export const recipes: Recipe[] = [
    {
        "id": "chili-sin-carne",
        "title": "Chili sin carne",
        "prepTime": 10,
        "cookTime": 25,
        "tags": ["vegetarisch", "makkelijk", "bonen"],
        "ingredients": [
            { "name": "Rode kidneybonen", "quantity": "1 blik (400g)" },
            { "name": "Mais", "quantity": "1 blik (300g)" },
            { "name": "Tomatenblokjes", "quantity": "1 blik (400g)" },
            { "name": "Ui", "quantity": "1" },
            { "name": "Knoflook", "quantity": "2 tenen" },
            { "name": "Paprikapoeder", "quantity": "2 tl" },
            { "name": "Komijn", "quantity": "1 tl" },
            { "name": "Chilipoeder", "quantity": "0.5 tl" },
            { "name": "Olie", "quantity": "1 el" },
            { "name": "Zout", "quantity": "naar smaak" }
        ],
        "steps": [
            "Snipper de ui en hak de knoflook fijn.",
            "Fruit de ui en knoflook in olie in een pan.",
            "Voeg de specerijen toe en bak kort mee.",
            "Voeg tomatenblokjes, bonen en mais toe.",
            "Laat 15-20 minuten sudderen op laag vuur.",
            "Breng op smaak met zout."
        ]
    },
    {
        "id": "pasta-pesto-kip",
        "title": "Pasta met pesto en kip",
        "prepTime": 10,
        "cookTime": 15,
        "tags": ["snel", "pasta", "kip"],
        "ingredients": [
            { "name": "Pasta", "quantity": "200g" },
            { "name": "Kipfilet", "quantity": "200g" },
            { "name": "Groene pesto", "quantity": "3 el" },
            { "name": "Cherry tomaten", "quantity": "100g" },
            { "name": "Parmezaanse kaas", "quantity": "geraspt, naar smaak" },
            { "name": "Olie", "quantity": "1 el" },
            { "name": "Peper & zout", "quantity": "naar smaak" }
        ],
        "steps": [
            "Kook de pasta volgens de verpakking.",
            "Snijd de kip in blokjes en bak gaar in olie.",
            "Halveer de tomaatjes en bak kort mee.",
            "Voeg de gekookte pasta en pesto toe.",
            "Roer goed door en garneer met Parmezaan."
        ]
    },
    {
        "id": "zoete-aardappel-bowl",
        "title": "Zoete aardappel bowl met hummus",
        "prepTime": 15,
        "cookTime": 20,
        "tags": ["vegan", "bowl", "gezond"],
        "ingredients": [
            { "name": "Zoete aardappel", "quantity": "2 stuks" },
            { "name": "Kikkererwten", "quantity": "1 blik (400g)" },
            { "name": "Komkommer", "quantity": "0.5" },
            { "name": "Spinazie", "quantity": "handvol" },
            { "name": "Hummus", "quantity": "2 el per bowl" },
            { "name": "Paprikapoeder", "quantity": "1 tl" },
            { "name": "Olijfolie", "quantity": "1 el" },
            { "name": "Zout", "quantity": "naar smaak" }
        ],
        "steps": [
            "Verwarm de oven voor op 200°C.",
            "Snijd de zoete aardappel in blokjes en rooster 20 min met olie, zout, paprikapoeder.",
            "Spoel kikkererwten af en bak kort krokant in pan.",
            "Snijd komkommer in halve maantjes.",
            "Stel de bowl samen met spinazie, zoete aardappel, kikkererwten en komkommer.",
            "Schep hummus erop en serveer."
        ]
    }
]
