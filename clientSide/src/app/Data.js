import Image01 from "./Components/cards1.webp";
import Image02 from "./Components/cards2.jpg";
import Image03 from "./Components/cards3.webp";
import Image04 from "./Components/cards4.jpg";
import Image05 from "./Components/cards5.jpg";
import Image06 from "./Components/cards6.webp";
import Image07 from "./Components/cards7.webp";
import Image08 from "./Components/cards8.webp";
import Image09 from "./Components/cards9.jpg";
import Image10 from "./Components/cards10.webp";
import Image11 from "./Components/cards11.jpg";
import Image12 from "./Components/cards12.jpg";

import santorini1 from "./assets/santorini1.jpg";
import santorini2 from "./assets/santorini2.jpg";
import santorini3 from "./assets/santorini3.jpg";
import kyoto1 from "./assets/kyoto1.jpg";
import kyoto2 from "./assets/kyoto2.jpg";
import kyoto3 from "./assets/kyoto3.jpg";
import machuPicchu1 from "./assets/Machu Picchu1.webp";
import machuPicchu2 from "./assets/Machu Picchu2.webp";
import machuPicchu3 from "./assets/Machu Picchu3.jpg";
import banfNationalPark1 from "./assets/Banff National Park1.jpg";
import banfNationalPark2 from "./assets/Banff National Park2.webp";
import banfNationalPark3 from "./assets/Banff National Park3.jpg";
import capeTown1 from "./assets/Cape Town1.webp";
import capeTown2 from "./assets/Cape Town2.webp";
import capeTown3 from "./assets/Cape Town3.jpg";
import venice1 from "./assets/Venice1.webp";
import venice2 from "./assets/Venice2.webp";
import venice3 from "./assets/Venice3.avif";
import greatBarrierReef1 from "./assets/Great Barrier Reef1.jpg";
import greatBarrierReef2 from "./assets/Great Barrier Reef2.jpg";
import greatBarrierReef3 from "./assets/Great Barrier Reef3.jpg";
import petra1 from "./assets/Petra1.webp";
import petra2 from "./assets/Petra1.webp";
import petra3 from "./assets/Petra1.webp";
import iceland2 from "./assets/Iceland2.webp";
import iceland3 from "./assets/Iceland3.jpg";
import marrakech1 from "./assets/Marrakech1.webp";
import marrakech2 from "./assets/Marrakech2.webp";
import marrakech3 from "./assets/Marrakech3.webp";
import newyork1 from "./assets/Newyork1.jpg";
import newyork2 from "./assets/Newyork2.jpg";
import newyork3 from "./assets/Newyork3.jpg";
import bali1 from "./assets/Bali1.jpeg";
import bali2 from "./assets/Bali2.webp";
import bali3 from "./assets/Bali3.webp";

const destinations = [
  {
    id: "Santorini",
    name: "Santorini",
    detail:
      "Santorini, an island in the Aegean Sea, is known for its stunning sunsets, whitewashed buildings, and crystal-clear waters. The island's volcanic history has shaped its unique landscape, with dramatic cliffs and black sand beaches. Explore the charming villages of Oia and Fira, where narrow streets wind through beautiful architecture and offer breathtaking views of the caldera.",
    image: Image01,
    destination: "Greece",
    map: "https://goo.gl/maps/3Y2Ho4x4oHJ2",
    rating: 4.8,
    latitude: 36.3932,
    longitude: 25.4615,
    blog: {
      content: `
      Santorini, an idyllic island in the Aegean Sea, is a dream destination for travelers seeking breathtaking landscapes, rich history, and a vibrant culture. Known for its iconic whitewashed buildings with blue domes, Santorini offers an array of activities and sights that captivate visitors from around the world.

      The island's volcanic origins have created unique black sand beaches, such as Kamari and Perissa, perfect for a relaxing day by the sea. For history enthusiasts, the ancient ruins of Akrotiri provide a fascinating glimpse into the past, with well-preserved remnants of a Minoan city.

      The towns of Fira and Oia are must-visit spots, offering picturesque streets lined with charming shops, cafes, and restaurants. Oia, in particular, is famous for its stunning sunsets, where the sky transforms into a canvas of vibrant colors, creating an unforgettable experience.
    `,
      prosAndCons: {
        pros: [
          "Stunning sunsets and views",
          "Unique black sand beaches",
          "Rich historical sites",
        ],
        cons: [
          "Can be crowded during peak seasons",
          "Higher prices compared to other Greek islands",
        ],
      },
      gallery: [santorini1, santorini2, santorini3],
    },
  },
  {
    id: "Kyoto",
    name: "Kyoto",
    detail:
      "Kyoto, the cultural heart of Japan, is renowned for its beautiful temples, traditional wooden houses, and serene gardens. The city boasts 17 UNESCO World Heritage sites, including the famous Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine with its iconic red torii gates. In spring, Kyoto's cherry blossoms transform the city into a picturesque wonderland.",
    image: Image02,
    destination: "Japan",
    map: "https://goo.gl/maps/VK9HQd6VQd72",
    rating: 4.7,
    latitude: 35.011665,
    longitude: 135.768326,
    blog: {
      content: `
      Kyoto, the cultural heart of Japan, is renowned for its beautiful temples, traditional wooden houses, and serene gardens. The city boasts 17 UNESCO World Heritage sites, including the famous Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine with its iconic red torii gates. In spring, Kyoto's cherry blossoms transform the city into a picturesque wonderland.

      Explore the historic districts of Gion and Higashiyama, where narrow streets are lined with traditional machiya houses and artisan shops. Don't miss the opportunity to participate in a tea ceremony or witness a mesmerizing geisha performance.

      Kyoto's culinary scene is equally captivating, with a variety of local dishes such as kaiseki ryori (traditional multi-course meals) and yudofu (tofu hot pot). The city's blend of tradition and modernity creates a unique atmosphere that enchants visitors year-round.
    `,
      prosAndCons: {
        pros: [
          "Beautiful temples and gardens",
          "Cherry blossoms in spring",
          "Cultural experiences like tea ceremonies",
        ],
        cons: [
          "Can be crowded during major festivals",
          "Limited nightlife compared to other cities",
        ],
      },
      gallery: [kyoto1, kyoto2, kyoto3],
    },
  },

  {
    id: "Machu Picchu",
    name: "Machu Picchu",
    detail:
      "Machu Picchu, the ancient Incan city set high in the Andes Mountains, is one of the world's most iconic archaeological sites. Surrounded by lush green peaks and shrouded in mist, the ruins of Machu Picchu offer a glimpse into the past with well-preserved terraces, temples, and plazas. The site is a testament to the engineering prowess and cultural significance of the Inca civilization.",
    image: Image03,
    destination: "Peru",
    map: "https://goo.gl/maps/KY9Kc1S9ZJ42",
    rating: 4.9,
    latitude: -13.163068,
    longitude: -72.545128,
    blog: {
      content: `
      Machu Picchu, the ancient Incan city set high in the Andes Mountains, is one of the world's most iconic archaeological sites. Surrounded by lush green peaks and shrouded in mist, the ruins of Machu Picchu offer a glimpse into the past with well-preserved terraces, temples, and plazas. The site is a testament to the engineering prowess and cultural significance of the Inca civilization.

      Explore the Intihuatana stone, believed to have been an astronomic clock or calendar, and the Temple of the Sun, a semi-circular temple built atop a massive granite rock. Hike up to Huayna Picchu for breathtaking views of the entire citadel and the surrounding mountains.

      Machu Picchu's remote location and mystical ambiance make it a bucket-list destination for adventurers and history enthusiasts alike.
    `,
      prosAndCons: {
        pros: [
          "Iconic archaeological site",
          "Breathtaking mountain views",
          "Rich cultural and historical significance",
        ],
        cons: [
          "High altitude may cause altitude sickness",
          "Limited facilities at the site",
        ],
      },
      gallery: [machuPicchu1, machuPicchu2, machuPicchu3],
    },
  },
  {
    id: "Banff National Park",
    name: "Banff National Park",
    detail:
      "Banff National Park, located in the Canadian Rockies, is a paradise for nature lovers and adventure seekers. The park's stunning landscapes include turquoise lakes, snow-capped peaks, and dense forests. Visitors can enjoy a range of activities, from hiking and wildlife spotting to skiing and snowboarding in winter. Lake Louise and Moraine Lake are must-see highlights with their vibrant blue waters.",
    image: Image04,
    destination: "Canada",
    map: "https://goo.gl/maps/L2XG7hx2Ecv",
    rating: 4.6,
    latitude: 51.496845,
    longitude: -115.928055,
    blog: {
      content: `
      Banff National Park, located in the Canadian Rockies, is a paradise for nature lovers and adventure seekers. The park's stunning landscapes include turquoise lakes, snow-capped peaks, and dense forests. Visitors can enjoy a range of activities, from hiking and wildlife spotting to skiing and snowboarding in winter. Lake Louise and Moraine Lake are must-see highlights with their vibrant blue waters.

      Take a scenic drive along the Icefields Parkway, stopping at Peyto Lake and Athabasca Glacier. For a bird's-eye view of the Rockies, ride the Banff Gondola up Sulphur Mountain, where panoramic vistas await at the summit.

      Banff's pristine wilderness and natural beauty offer endless opportunities for exploration and outdoor adventures throughout the year.
    `,
      prosAndCons: {
        pros: [
          "Spectacular mountain scenery",
          "Abundance of outdoor activities",
          "Accessible from Calgary for day trips",
        ],
        cons: [
          "Crowded during peak tourist seasons",
          "High cost of accommodation in peak season",
        ],
      },
      gallery: [banfNationalPark1, banfNationalPark2, banfNationalPark3],
    },
  },
  {
    id: "Cape Town",
    name: "Cape Town",
    detail:
      "Cape Town, a vibrant city on the southwestern coast of South Africa, is known for its stunning natural beauty and diverse culture. Dominated by the iconic Table Mountain, the city offers a blend of urban sophistication and outdoor adventure. Explore the scenic Cape Peninsula, visit the historic Robben Island, or relax on the picturesque beaches of Clifton and Camps Bay.",
    image: Image05,
    destination: "South Africa",
    map: "https://goo.gl/maps/Pb3MvQs6bXw",
    rating: 4.7,
    latitude: -33.9221,
    longitude: 18.4231,
    blog: {
      content: `
      Cape Town, a vibrant city on the southwestern coast of South Africa, is known for its stunning natural beauty and diverse culture. Dominated by the iconic Table Mountain, the city offers a blend of urban sophistication and outdoor adventure. Explore the scenic Cape Peninsula, visit the historic Robben Island, or relax on the picturesque beaches of Clifton and Camps Bay.

      Take a cable car ride to the top of Table Mountain for panoramic views of the city and coastline below. Drive along Chapman's Peak Drive for breathtaking coastal vistas, or embark on a wine tasting tour in the nearby Cape Winelands.

      Cape Town's rich history, vibrant arts scene, and stunning landscapes make it a captivating destination for travelers seeking both relaxation and exploration.
    `,
      prosAndCons: {
        pros: [
          "Scenic views from Table Mountain",
          "Diverse cultural experiences",
          "Variety of outdoor activities",
        ],
        cons: [
          "High crime rate in some areas",
          "Traffic congestion during peak times",
        ],
      },
      gallery: [capeTown1, capeTown2, capeTown3],
    },
  },
  {
    id: "Venice",
    name: "Venice",
    detail:
      "Venice, the enchanting city of canals, is a masterpiece of art and architecture. Built on a network of islands, the city is famous for its winding canals, historic palaces, and ornate bridges. Visitors can glide through the waterways on a gondola, visit the grand St. Mark's Basilica, and explore the bustling Piazza San Marco. Venice's unique charm and romantic ambiance make it a must-visit destination.",
    image: Image06,
    destination: "Italy",
    map: "https://goo.gl/maps/J7S1u8VoMH82",
    rating: 4.8,
    latitude: 45.4404,
    longitude: 12.316,
    blog: {
      content: `
      Venice, the enchanting city of canals, is a masterpiece of art and architecture. Built on a network of islands, the city is famous for its winding canals, historic palaces, and ornate bridges. Visitors can glide through the waterways on a gondola, visit the grand St. Mark's Basilica, and explore the bustling Piazza San Marco. Venice's unique charm and romantic ambiance make it a must-visit destination.

      Wander through the narrow streets of the San Polo and Dorsoduro districts, where hidden gems and local cafes await discovery. Don't miss the chance to attend a traditional Venetian mask-making workshop or indulge in cicchetti (Venetian tapas) at a local bacaro.

      Venice's rich cultural heritage and scenic beauty have inspired artists and travelers for centuries, creating an unforgettable experience for those who explore its labyrinthine streets and historic landmarks.
    `,
      prosAndCons: {
        pros: [
          "Romantic gondola rides on the canals",
          "Historic landmarks like St. Mark's Basilica",
          "Artisanal crafts and local cuisine",
        ],
        cons: [
          "Crowded with tourists, especially in peak season",
          "Expensive dining and accommodation options",
        ],
      },
      gallery: [venice1, venice2, venice3],
    },
  },
  {
    id: "Great Barrier Reef",
    name: "Great Barrier Reef",
    detail:
      "The Great Barrier Reef, the world's largest coral reef system, is a breathtaking underwater wonderland. Stretching over 2,300 kilometers along the northeast coast of Australia, the reef is home to a dazzling array of marine life, including colorful corals, tropical fish, and majestic sea turtles. Snorkeling and diving are the best ways to explore the vibrant coral gardens and encounter the incredible biodiversity.",
    image: Image07,
    destination: "Australia",
    map: "https://goo.gl/maps/Z61ehs1Ez882",
    rating: 4.9,
    latitude: 18.2871,
    longitude: 147.6992,
    blog: {
      content: `
      The Great Barrier Reef, the world's largest coral reef system, is a breathtaking underwater wonderland. Stretching over 2,300 kilometers along the northeast coast of Australia, the reef is home to a dazzling array of marine life, including colorful corals, tropical fish, and majestic sea turtles. Snorkeling and diving are the best ways to explore the vibrant coral gardens and encounter the incredible biodiversity.

      Visit popular reef destinations like the Whitsunday Islands and Cairns, where you can embark on reef cruises, helicopter tours, and guided snorkeling adventures. Experience the magic of swimming alongside giant manta rays and spotting elusive reef sharks in their natural habitat.

      The Great Barrier Reef's ecological importance and natural beauty make it a UNESCO World Heritage site and a must-see destination for nature enthusiasts and underwater adventurers.
    `,
      prosAndCons: {
        pros: [
          "World's largest coral reef system",
          "Rich marine biodiversity",
          "Unforgettable snorkeling and diving experiences",
        ],
        cons: [
          "Coral bleaching due to climate change",
          "Tourist impact on fragile ecosystems",
        ],
      },
      gallery: [greatBarrierReef1, greatBarrierReef2, greatBarrierReef3],
    },
  },
  {
    id: "Petra",
    name: "Petra",
    detail:
      "Petra, the ancient city carved into rose-red cliffs, is one of the world's most remarkable archaeological sites. Located in the desert of southern Jordan, Petra was the capital of the Nabataean Kingdom. The city's most famous monument, the Treasury, is an awe-inspiring sight, along with the Monastery, the Royal Tombs, and the Siq, a narrow canyon that serves as the main entrance.",
    image: Image08,
    destination: "Jordan",
    map: "https://goo.gl/maps/5DPn4k3XJ3N2",
    rating: 4.7,
    latitude: 30.32896,
    longitude: 35.444832,
    blog: {
      content: `
      Petra, the ancient city carved into rose-red cliffs, is one of the world's most remarkable archaeological sites. Located in the desert of southern Jordan, Petra was the capital of the Nabataean Kingdom. The city's most famous monument, the Treasury, is an awe-inspiring sight, along with the Monastery, the Royal Tombs, and the Siq, a narrow canyon that serves as the main entrance.

      Explore the intricately carved facades of Petra's temples and tombs, marveling at the skill and craftsmanship of its ancient inhabitants. Hike up to the High Place of Sacrifice for panoramic views of the surrounding desert landscape.

      Petra's historical significance and stunning architecture make it a UNESCO World Heritage site and a must-visit destination for history buffs and adventurers exploring the wonders of the ancient world.
    `,
      prosAndCons: {
        pros: [
          "Iconic archaeological site",
          "Unique rock-cut architecture",
          "Scenic desert landscape",
        ],
        cons: [
          "Hot temperatures, especially in summer",
          "Challenges for visitors with mobility issues",
        ],
      },
      gallery: [petra1, petra2, petra3],
    },
  },
  {
    id: "Iceland",
    name: "Iceland",
    detail:
      "Iceland, the land of fire and ice, is renowned for its otherworldly landscapes and natural wonders. From majestic waterfalls like Gullfoss and Skógafoss to geothermal hot springs like the Blue Lagoon, Iceland offers endless opportunities for adventure and relaxation. Explore the volcanic landscapes of the Golden Circle, witness the Northern Lights, and experience the unique culture of this Nordic island nation.",
    image: Image09,
    destination: "Iceland",
    map: "https://goo.gl/maps/2wAXmSk2fd72",
    rating: 4.8,
    latitude: 64.963,
    longitude: -19.0208,
    blog: {
      content: `
      Iceland, the land of fire and ice, is renowned for its otherworldly landscapes and natural wonders. From majestic waterfalls like Gullfoss and Skógafoss to geothermal hot springs like the Blue Lagoon, Iceland offers endless opportunities for adventure and relaxation. Explore the volcanic landscapes of the Golden Circle, witness the Northern Lights, and experience the unique culture of this Nordic island nation.

      Drive along the Ring Road for a scenic journey around the island, stopping at charming villages and geological wonders along the way. Visit the Vatnajökull National Park to see Europe's largest glacier and explore ice caves in winter.

      Iceland's pristine wilderness and geothermal wonders make it a paradise for nature lovers and outdoor enthusiasts seeking awe-inspiring landscapes and memorable experiences.
    `,
      prosAndCons: {
        pros: [
          "Spectacular natural landscapes",
          "Geothermal hot springs like the Blue Lagoon",
          "Opportunities to see the Northern Lights",
        ],
        cons: [
          "High cost of living and travel expenses",
          "Unpredictable weather conditions",
        ],
      },
      gallery: [iceland2, iceland3],
    },
  },
  {
    id: "Marrakech",
    name: "Marrakech",
    detail:
      "Marrakech, a vibrant city in Morocco, is a feast for the senses with its bustling souks, historic palaces, and lush gardens. The city's medina is a maze of narrow streets filled with colorful markets, where you can find everything from spices and textiles to traditional crafts. Visit the stunning Jardin Majorelle, explore the grand Bahia Palace, and experience the lively atmosphere of Jemaa el-Fnaa square.",
    image: Image10,
    destination: "Morocco",
    map: "https://goo.gl/maps/BkwGuhCo6dw",
    rating: 4.7,
    latitude: 31.6225,
    longitude: -7.9898,
    blog: {
      content: `
      Marrakech, a vibrant city in Morocco, is a feast for the senses with its bustling souks, historic palaces, and lush gardens. The city's medina is a maze of narrow streets filled with colorful markets, where you can find everything from spices and textiles to traditional crafts. Visit the stunning Jardin Majorelle, explore the grand Bahia Palace, and experience the lively atmosphere of Jemaa el-Fnaa square.

      Take a stroll through the vibrant souks of the Medina, where artisans and merchants sell their wares amidst the sounds of traditional music and the scent of spices. Indulge in Moroccan cuisine, from savory tagines to sweet pastries, at local restaurants and street food stalls.

      Marrakech's blend of ancient history, vibrant culture, and warm hospitality makes it a captivating destination for travelers seeking an authentic Moroccan experience.
    `,
      prosAndCons: {
        pros: [
          "Rich cultural heritage and historic landmarks",
          "Colorful markets and vibrant souks",
          "Delicious Moroccan cuisine",
        ],
        cons: [
          "Persistent touts and tourist scams",
          "Overcrowded tourist areas, especially in peak season",
        ],
      },
      gallery: [marrakech1, marrakech2, marrakech3],
    },
  },
  {
    id: "New York City",
    name: "New York City",
    detail:
      "New York City, the city that never sleeps, is a global metropolis known for its iconic landmarks, diverse neighborhoods, and vibrant culture. From the towering skyscrapers of Manhattan to the artistic enclaves of Brooklyn, the city offers endless attractions. Visit the Statue of Liberty, stroll through Central Park, catch a Broadway show, and experience the bustling energy of Times Square.",
    image: Image11,
    destination: "United States",
    map: "https://goo.gl/maps/3YGtWv56HT72",
    rating: 4.6,
    latitude: 40.7128,
    longitude: -74.006,
    blog: {
      content: `
      New York City, the city that never sleeps, is a global metropolis known for its iconic landmarks, diverse neighborhoods, and vibrant culture. From the towering skyscrapers of Manhattan to the artistic enclaves of Brooklyn, the city offers endless attractions. Visit the Statue of Liberty, stroll through Central Park, catch a Broadway show, and experience the bustling energy of Times Square.

      Explore world-class museums like the Metropolitan Museum of Art and the Museum of Modern Art, or shop along Fifth Avenue for designer boutiques and flagship stores. Sample diverse cuisines at local eateries and food trucks, from New York-style pizza to gourmet food markets.

      New York's fast-paced lifestyle and cultural diversity create a dynamic urban experience that draws millions of visitors each year, offering something for everyone to enjoy.
    `,
      prosAndCons: {
        pros: [
          "Iconic landmarks like Times Square and Central Park",
          "Diverse cultural and culinary experiences",
          "Broadway shows and world-class museums",
        ],
        cons: [
          "High cost of accommodation and dining",
          "Crowded tourist attractions, especially in peak season",
        ],
      },
      gallery: [newyork1, newyork2, newyork3],
    },
  },
  {
    id: "Bali",
    name: "Bali",
    detail:
      "Bali, the tropical paradise in Indonesia, is famous for its stunning beaches, lush rice terraces, and vibrant culture. The island offers a mix of relaxation and adventure, from surfing on the waves of Kuta Beach to exploring the cultural heart of Ubud. Visit the iconic Tanah Lot temple, experience the traditional Balinese dance performances, and indulge in the island's rich culinary scene.",
    image: Image12,
    destination: "Indonesia",
    map: "https://goo.gl/maps/Yp71xoh3h8p",
    rating: 4.9,
    latitude: -8.409518,
    longitude: 115.188919,
    blog: {
      content: `
      Bali, the tropical paradise in Indonesia, is famous for its stunning beaches, lush rice terraces, and vibrant culture. The island offers a mix of relaxation and adventure, from surfing on the waves of Kuta Beach to exploring the cultural heart of Ubud. Visit the iconic Tanah Lot temple, experience the traditional Balinese dance performances, and indulge in the island's rich culinary scene.

      Discover Bali's spiritual side with visits to ancient temples like Uluwatu Temple and Goa Gajah, known for their intricate stone carvings and dramatic cliffside locations. Relax and rejuvenate with yoga retreats, spa treatments, and wellness experiences amidst tranquil natural surroundings.

      Bali's warm hospitality and natural beauty make it a popular destination for honeymooners, families, and solo travelers seeking a tropical getaway with a cultural twist.
    `,
      prosAndCons: {
        pros: [
          "Beautiful beaches and vibrant nightlife",
          "Rich cultural heritage and spiritual experiences",
          "Variety of outdoor activities and water sports",
        ],
        cons: [
          "Heavy traffic and overcrowded tourist areas",
          "Potential for cultural misunderstandings",
        ],
      },
      gallery: [bali1, bali2, bali3],
    },
  },
];

export default destinations;
