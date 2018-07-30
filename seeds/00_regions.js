
exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('regions').del()
    .then(function () {
    // Inserts seed entries
    return knex('regions').insert([
            {
                id: 1,
                varietal:"Albarino",
                country:"Spain",
                region:"Rias Baixas",
                appelation:"Galicia",
                lat:42.659379,
                long: -8.795818
            },
            {
                id: 2,
                varietal:"Chardonnay",
                country: "France",
                region:"Burgundy",
                appelation:"Chablis Cote-d'or Maconnais",
                lat: 46.855222, 
                long: 4.790561
            },
            {
                id: 3, 
                varietal: "Chardonnay",
                country: "United States",
                region: "California",
                appelation: "Napa-valley Sonoma Central-coast",
                lat: 38.346017, 
                long: -122.377345
            },
            {
                id: 4,
                varietal:"Chenin Blanc",
                country:"France",
                region:"Vouvray",
                appelation:"Loire",
                lat: 47.429509, 
                long: 0.798073
            },
            {
                id: 5,
                varietal:"Chenin Blanc",
                country:"France",
                region:"Savennieres",
                appelation:"Loire",
                lat: 47.397810, 
                long: -0.668797
            },
            {
                id: 6,
                varietal:"Chenin Blanc",
                country:"France",
                region:"Loire Valley",
                appelation:"Loire",
                lat: 47.237297, 
                long: 0.213437
            },
            {
                id: 7,
                varietal:"Pinot Gris",
                country:"Italy",
                region:"Trento-Alto Adige",
                appelation:null,
                lat: 46.490797, 
                long: 11.290399
            },
            {
                id: 8, 
                varietal:"Pinot Gris",
                country:"Italy",
                region:"Friuli",
                appelation:null,
                lat: 46.159220, 
                long: 13.146709
            },
            {
                id: 9,
                varietal:"Pinot Gris",
                country:"France",
                region:"Alsace",
                appelation:null,
                lat: 48.245658, 
                long: 7.428442
            },
            {
                id: 10,
                varietal:"Gerwurztraminer",
                country:"France",
                region:"Alsace",
                appelation:null,
                lat: 48.245658, 
                long: 7.428442
            },
            {
                id: 11,
                varietal:"Reisling",
                country:"Australia",
                region:"South Australia",
                appelation:"Clare-Valley Eden-Valley",
                lat: -33.036233, 
                long: 138.622978
            },           
            {
                id: 12,
                varietal:"Reisling",
                country:"France",
                region:"Alsace",
                appelation:null,
                lat: 48.245658, 
                long: 7.428442
            },
            {
                id: 13,
                varietal:"Reisling",
                country:"Germany",
                region:"Rhein",
                appelation:null,
                lat: 49.328330, 
                long: 7.841833
            },
            {
                id: 14,
                varietal:"Reisling",
                country:"Germany",
                region:"Mosel",
                appelation:null,
                lat: 49.811739, 
                long: 6.816037
            },
            {
                id: 15,
                varietal:"Sauvignon Blanc",
                country:"New Zealand",
                region:"South Island",
                appelation:"Marlborough",
                lat: -41.704037, 
                long: 173.500970
            },
            {
                id: 16,
                varietal:"Sauvignon Blanc",
                country:"United States",
                region:"California",
                appelation:"Napa-Valley Sonoma",
                lat: 38.346017,
                long: -122.377345
            },
            {
                id: 17,
                varietal:"Sauvignon Blanc",
                country:"France",
                region:"Graves",
                appelation:null,
                lat: 44.702278, 
                long:-0.537534
            },
            {
                id: 18,
                varietal:"Sauvignon Blanc",
                country:"France",
                region:"Pessac-Leognan",
                appelation:null,
                lat: 44.767903, 
                long: -0.634402
            },
            {
                id: 19,
                varietal:"Sauvignon Blanc",
                country:"France",
                region:"Bordeaux",
                appelation: null,
                lat: 44.853485, 
                long: -0.573783
            },
            {
                id: 20,
                varietal:"Sauvignon Blanc",
                country:"France",
                region:"Loire Valley",
                appelation: "Sancerre Poiully-Fume",
                lat: 47.237297, 
                long: 0.213437
            },
            {
                id: 21,
                varietal:"Torrontes",
                country:"Argentina",
                region:"Mendoza",
                appelation: null,
                lat: -34.442727, 
                long: -68.727018
            },
            {
                id: 22,
                varietal:"Torrontes",
                country:"Argentina",
                region:"Salta Catamarca",
                appelation: null,
                lat: -25.471170, 
                long: -65.625614
            },
            {
                id: 23,
                varietal:"Viognier",
                country:"France",
                region:"Rhone Valley",
                appelation: "Condrieu",
                lat: 45.476261, 
                long: 4.754006
            },
            {
                id: 24,
                varietal:"Gamay",
                country:"France",
                region:"Burgundy",
                appelation:"Beaujolais",
                lat: 46.202559, 
                long: 4.687410
            },
            {
                id: 25,
                varietal:"Cabernet Sauvignon",
                country:"United States",
                region:"California",
                appelation: "Napa-Valley Sonoma",
                lat: 38.346017, 
                long: -122.377345
            },
            {
                id: 26,
                varietal:"Cabernet Sauvignon",
                country:"Australia",
                region:"South Australia",
                appelation: null,
                lat: -35.118233, 
                long: 138.767684
            },
            {
                id: 27,
                varietal:"Cabernet Sauvignon",
                country:"Chile",
                region:"Central Valley",
                appelation: null,
                lat: -34.749572, 
                long: -71.407064
            },
            {
                id: 28,
                varietal:"Cabernet Sauvignon",
                country:"Australia",
                region:"Western Australia",
                appelation: null,
                lat: -33.955334, 
                long: 115.111935
            },
            {
                id: 29,
                varietal:"Cabernet Sauvignon",
                country:"Australia",
                region:"South Australia",
                appelation: null,
                lat: -33.036233, 
                long: 138.622978
            },
            {
                id: 30,
                varietal:"Cabernet Sauvignon",
                country:"France",
                region:"Bordeaux",
                appelation: "Graves Haut-Medoc",
                lat: 45.102954, 
                long: -0.753043
            },
            {
                id: 31,
                varietal:"Grenache",
                country:"Australia",
                region:"South Australia",
                appelation: null,
                lat: -34.528233, 
                long: 138.996313
            },
            {
                id: 32,
                varietal:"Grenache",
                country:"France",
                region:"Rhone Valley",
                appelation: "Châteauneuf-du-Pape Gigondas",
                lat: 44.060608, 
                long: 4.825413
            },
            {
                id: 33, 
                varietal:"Merlot",
                country:"France",
                region:"Bordeaux",
                appelation: "Pomerol St-Emilion",
                lat: 44.928676, 
                long: -0.208228
            },
            {
                id: 34,
                varietal:"Merlot",
                country:"United States",
                region:"California",
                appelation: "Napa-Valley Sonoma",
                lat: 38.346017, 
                long: -122.377345
            },
            {
                id: 35,
                varietal:"Syrah",
                country:"France",
                region:"Rhone Valley",
                appelation: "Northern Rhone",
                lat: 45.509027, 
                long: 4.837497
            },
            {
                id: 36,
                varietal:"Syrah",
                country:"Australia",
                region:"South Australia",
                appelation: null,
                lat:-37.290234, 
                long: 140.712654
            },
            {
                id: 37,
                varietal:"Syrah",
                country:"Australia",
                region:"Western Australia",
                appelation: null,
                lat: -33.955334, 
                long: 115.111935
            },
            {
                id: 38,
                varietal:"Syrah",
                country:"Australia",
                region:"Victoria",
                appelation: null,
                lat: -36.902823, 
                long: 144.736291
            },
            {
                id: 39,
                varietal:"Syrah",
                country:"United States",
                region:"California",
                appelation: "Napa-Valley Sonoma Central-Coast",
                lat: 38.346017, 
                long: -122.377345
            },
            {
                id: 40,
                varietal:"Nebbiolo",
                country:"Italy",
                region:"Peidmont",
                appelation:"Barolo Barbaresco",
                lat: 44.8586861,
                long: 7.7966566
            },
            {
                id: 41,
                varietal:"Pinot Noir",
                country:"New Zealand",
                region:"North Island",
                appelation:"Martinbourough",
                lat: -41.213270,
                long: 175.448788
            },
            {
                id: 42,
                varietal:"Pinot Noir",
                country:"New Zealand",
                region:"South Island",
                appelation: "Central Otago",
                lat: -44.968284,
                long: 169.214828
            },
            {
                id: 43,
                varietal:"Pinot Noir",
                country:"United States",
                region:"California",
                appelation: "Napa-Valley Sonoma Central-Coast",
                lat: 38.346017, 
                long: -122.377345
            },
            {
                id: 44,
                varietal:"Pinot Noir",
                country:"France",
                region:"Burgundy",
                appelation: "Cote d'Or",
                lat: 46.931716, 
                long: 4.742422
            },
            {
                id: 45,
                varietal:"Malbec",
                country:"Argentina",
                region:"Mendoza",
                appelation: null,
                lat: -34.442727, 
                long: -68.727018
            },
            {
                id: 46,
                varietal:"Sangiovese",
                country:"Italy",
                region:"Tuscany",
                appelation: "Brunello-di-Montalcino Chianti-Classico",
                lat: 43.417547, 
                long: 11.143936
            },
            {
                id: 47,
                varietal:"Zinfandel",
                country:"United States",
                region:"California",
                appelation: "Paso-Robles Napa Sonoma",
                lat: 35.616856, 
                long: -120.744174
            },
            {
                id: 48,
                varietal:"Tempranillo",
                country:"Spain",
                region:"Rioja",
                appelation: null,
                lat: 42.278181, 
                long: -2.537034
            },
            {
                id: 49,
                varietal:"Tempranillo",
                country:"Spain",
                region:"Ribera del Duero",
                appelation: null,
                lat: 41.717083, 
                long: -3.692328
            }
    ]);
    });
};
