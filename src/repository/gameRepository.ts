import { join } from "@prisma/client/runtime/index.js";
import prisma from "../database/db.js";
import {InsertGame} from "../protocols/games.js";

export async function updateGame(id: number, status: boolean){
    await prisma.games.update({
        where: {id},
        data:{status}
    })
}

export async function GetAllGames(){
    const data = await prisma.games.findMany({
        include:{
            genres:{
                select:{
                    name:true
                }
            },
            platforms:{
                select:{
                    name:true
                }
            },            reviews:{
                select:{
                    score:true
                }
            }
        }
    })
    data.map(m => delete m.platformId && delete m.genreId)
    return data;
}

export async function insertGame(game: InsertGame){
    await prisma.games.create({
        data:game
    })
}

export async function getGenreByName(name: string){
    const data = await prisma.genres.findUnique({
        where: {name}
    })
    return data;
}

export async function getAllGenres(){
    const data = await prisma.genres.findMany({
        select:{
            id:true,
            name:true,
            _count:{
                select:{games:true}
            }
        }
    })
    return data;
}

export async function getAllPlatform(){
    const data = await prisma.platforms.findMany({
        select:{
            id:true,
            name:true,
        }
    })
    return data;
}

export async function insertReview(gameId: number, score: number){
    await prisma.reviews.create({data: {gameId, score}})
}

export async function getAllReviews(){
    const data = await prisma.reviews.findMany({
        include:{
            games:{
                select:{
                    id:true,
                    title:true
                }
            }
        }
    })
    data.map(r => delete r.gameId)
    return data;
}

export async function getPlatformByName(name: string){
    const data = await prisma.platforms.findUnique({
        where: {name}
    })
    return data;
}

export async function insertPlatform(name: string){
    await prisma.platforms.create({data: {name}})
}

export async function getGameById(id: number){
    const data = await prisma.games.findUnique({where: {id}})
    return data;
}

export async function deleteGameById(id: number){
    await prisma.games.delete({where: {id}})
}

export async function getScoreByGameId(gameId: number){
    const data = await prisma.reviews.findUnique({
        where: {gameId}
    })
    return data;
}

export async function insertGenre(name: string){
    await prisma.genres.create({
        data:{name}
    })
}

export async function deleteReview(gameId: number){
    await prisma.reviews.delete({where: {gameId}})
}




