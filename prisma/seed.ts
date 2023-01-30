import prisma from "../src/database/db.js";

async function main(){
    await prisma.platforms.createMany({
      data: [
        {name: "Xbox"},
        {name: "PlayStation"}
      ]
    })

    await prisma.genres.createMany({
      data: [
        {name: "Fantasy"},
        {name: "Action"},
        {name: "RPG"},
        {name: "Horror"},
        {name: "Shooter"}
      ]
    })

    await prisma.games.createMany({
        data: [
          {
            "imgUrl": "https://images3.alphacoders.com/608/608887.jpg",
            "title": "The Witcher 3: Wild Hunt",
            "platformId": 1,
            "genreId": 1
          },
          {
            "imgUrl": "https://images3.alphacoders.com/117/117095.jpg",
            "title": "The Elder Scrolls V: Skyrim",
            "platformId": 1,
            "genreId": 1
          },
          {
            "imgUrl": "https://images4.alphacoders.com/115/thumbbig-1151249.webp",
            "title": "Elden Ring",
            "platformId": 1,
            "genreId": 1
          },
          {
            "imgUrl": "https://images5.alphacoders.com/609/thumbbig-609173.webp",
            "title": "Dark Souls 3",
            "platformId": 2,
            "genreId": 2
          },
          {
            "imgUrl": "https://images5.alphacoders.com/702/thumbbig-702928.webp",
            "title": "The Technomancer",
            "platformId": 1,
            "genreId": 3
          },
          {
            "imgUrl": "https://images7.alphacoders.com/703/thumbbig-703817.webp",
            "title": "Outlast",
            "platformId": 1,
            "genreId": 4
          },
          {
            "imgUrl": "https://images.alphacoders.com/458/thumbbig-458032.webp",
            "title": "Battlefield 4",
            "platformId": 1,
            "genreId": 5
          }
        ]
    })
}

main()
.then(() => {
    console.log("Registration sucessful!");
    
})
.catch(e => {
    console.error(e);
    process.exit(1)
})
.finally(async () => await prisma.$disconnect())
