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
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/e/e1/Littlefootoff2.png",
        "image": "/dinosaurs/Aptosaurus.webp",
        "sound": "/roars/Apato.mp3"
    },
    {
        "name": "Saurolophus",
        "description": "One of the few hadrosaurs known to have lived on two continents.",
        "diet": "Herbivorous",
        "weight": 1900, //kg
        "length": 9.0, //m
        "found_in": "Canada, Mongolia",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/8/8d/Ducky_infobox.png",
        "image": "/dinosaurs/Saurolophus.webp",
        "sound": "/roars/Sauro.mp3"
    },
    {
        "name": "Tyrannosaurus Rex",
        "description": "The once—and always—king of the dinosaurs.",
        "diet": "Carnivorous",
        "weight": 7000, //kg
        "length": 12.0, //m
        "found_in": "Canada, USA",
        // "image": "https://i.ibb.co/xHFwS6n/sharptooth.png",
        "image": "/dinosaurs/sharptooth.png",
        "sound": "/roars/Trex.mp3"
    },
    {
        "name": "Stegosaurus",
        "description": "The small-brained, spike-tailed, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": 5000, //kg
        "length": 9.0, //m
        "found_in": "USA",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/9/96/Spike_infobox.png",
        "image": "/dinosaurs/Stegosaurus.webp",
        "sound": "/roars/Stego.mp3"
    },
    {
        "name": "Triceratops",
        "description": "The famous, three-horned, plant-eating dinosaur.",
        "diet": "Herbivorous",
        "weight": 5500, //kg
        "length": 9.0, //m
        "found_in": "USA",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png",
        "image": "/dinosaurs/Triceratops.webp",
        "sound": "/roars/Trice.mp3"
    },
    {
        "name": "Pterodactylus",
        "description": "These were not actually dinosaurs but they were actually flying reptiles",
        "diet": "Carnivorous",
        "weight": 50, //kg
        "length": 1.83, //m
        "found_in": "Germany",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/f/fd/Petrie_infobox.png",
        "image": "/dinosaurs/Pterodactylus.webp",
        "sound": "/roars/Ptero.mp3"
    },
    {
        "name": "Elasmosaurus",
        "description": "Believed to be a very close relative of Limusaurus",
        "diet": "Carnivorous",
        "weight": 100, //kg
        "length": 6.2, //m
        "found_in": "Tanzania",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/6/6a/Elsie.jpg",
        "image": "/dinosaurs/Elasmosaurus.webp",
        "sound": "/roars/Elasmo.mp3"
    },
    {
        "name": "Muttaburrasaurus",
        "description": "The most complete dinosaur fossil ever found in Australia.",
        "diet": "Herbivorous",
        "weight": 2800, //kg
        "length": 7, //m
        "found_in": "Australia",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/5/58/The_Taunting_Mutt.png",
        "image": "/dinosaurs/Muttaburrasaurus.webp",
        "sound": "/roars/Mutta.mp3"
    },
    {
        "name": "Oviraptor",
        "description": "Turns out that this \"egg thief\" got a bad rap.",
        "diet": "Omnivorous",
        "weight": 20, //kg
        "length": 2, //m
        "found_in": "Mongolia",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/7/75/Ruby_infobox.png",
        "image": "/dinosaurs/Oviraptor1.webp",
        "sound": "/roars/Oviro.mp3"
    },
    {
        "name": "Hypsilophodon",
        "description": "This man-sized herbivore liked to eat and run.",
        "diet": "Herbivorous",
        "weight": 50, //kg
        "length": 2.3, //m
        "found_in": "Spain, United Kingdom",
        // "image": "https://static.wikia.nocookie.net/landbeforetime/images/9/92/Hyp_III.png",
        "image": "/dinosaurs/Hypsilophodon.webp",
        "sound": "/roars/Hypsi.mp3"
    },
])