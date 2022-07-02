use dinosaurs;

db.dropDatabase();

db.dinosaurs.insertMany([
    {
        "name": "Apatosaurus",
        "description": "The dinosaur formerly known as Brontosaurus.",
        "diet": "Herbivorous",
        "weight": 19000, //kg
        "length": 21.0, //m
        "found_in": "USA",
        "image": "/src/static/images/dinosaurs/Aptosaurus.webp"
    },
    {
        "name": "Saurolophus",
        "description": "One of the few hadrosaurs known to have lived on two continents.",
        "diet": "Herbivorous",
        "weight": 1900, //kg
        "length": 9.0, //m
        "found_in": "Canada, Mongolia",
        "image": "/src/static/images/dinosaurs/Saurolophus.webp"
    },
    {
        "name": "Tyrannosaurus Rex",
        "description": "The once—and always—king of the dinosaurs.",
        "diet": "Carnivorous",
        "weight": 7000, //kg
        "length": 12.0, //m
        "found_in": "Canada, USA",
        "image": "/src/static/images/dinosaurs/Aptosaurus.webp"
    },
    {
        "name": "Stegosaurus",
        "description": "The small-brained, spike-tailed, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": 5000, //kg
        "length": 9.0, //m
        "found_in": "USA",
        "image": "/src/static/images/dinosaurs/Stegosaurus.webp"

    },
    {
        "name": "Triceratops",
        "description": "The famous, three-horned, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": 5500, //kg
        "length": 9.0, //m
        "found_in": "USA",
        "image": "/src/static/images/dinosaurs/Triceratops.webp"

    },
    {
        "name": "Pterodactylus",
        "description": "Became extinct around the same time as dinosaurs, however tehy were not dinosaurs, rather were flying reptiles",
        "diet": "Carnivorous",
        "weight": 50, //kg
        "length": 1.83, //m
        "found_in": "Germany",
        "image": "/src/static/images/dinosaurs/Pterodactylus.webp"

    },
    {
        "name": "Elasmosaurus",
        "description": "Believed to be a very close relative of Limusaurus",
        "diet": "Carnivorous",
        "weight": 100, //kg
        "length": 6.2, //m
        "found_in": "Tanzania",
        "image": "/src/static/images/dinosaurs/Elasmosaurus.webp"
    },
    {
        "name": "Muttaburrasaurus",
        "description": "The most complete dinosaur fossil ever found in Australia.",
        "diet": "Herbivorous",
        "weight": 2800, //kg
        "length": 7, //m
        "found_in": "Australia",
        "image": "/src/static/images/dinosaurs/Muttaburrasaurus.webp"
    },
    {
        "name": "Oviraptor",
        "description": "Turns out that this \"egg thief\" got a bad rap.",
        "diet": "Omnivorous",
        "weight": 20, //kg
        "length": 2, //m
        "found_in": "Mongolia",
        "image": "/src/static/images/dinosaurs/Oviraptor.webp"
    },
    {
        "name": "Hypsilophodon",
        "description": "This man-sized herbivore liked to eat and run.",
        "diet": "Herbivorous",
        "weight": 50, //kg
        "length": 2.3, //m
        "found_in": "Spain, United Kingdom",
        "image": "/src/static/images/dinosaurs/Hypsilophodon.webp"
    },
])