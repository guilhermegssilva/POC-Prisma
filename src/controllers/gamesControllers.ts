import { deleteGameById, deleteReview, getAllGenres, GetAllGames, getAllPlatform, getAllReviews, getGenreByName, getGameById, getPlatformByName, getScoreByGameId, insertGenre, insertGame, insertPlatform, insertReview, updateGame } from "../repository/gameRepository.js";
import { Request, Response } from "express";
import { GameBody } from "../protocols/games.js";
import ReviewBody from "../protocols/review.js";


export async function addGame(req: Request, res: Response) {
    const newGame = req.body as GameBody

    let genre = await getGenreByName(newGame.genre)
    
    if(genre === null){
        await insertGenre(newGame.genre)
        genre = await getGenreByName(newGame.genre)
    }

    let platform = await getPlatformByName(newGame.platform)
    
    if(platform === null){
        await insertPlatform(newGame.platform)
        platform = await getPlatformByName(newGame.platform)
    }

    await insertGame({
        imgUrl: newGame.imgUrl,
        title: newGame.title,
        platformId: platform.id,
        genreId: genre.id
    });

    res.sendStatus(200)
}

export async function deleteGame(req: Request, res: Response) {
    const {id} = req.params;
    
    const game = await getGameById(Number(id));

    if(!id || !game){
        res.sendStatus(400);
        return;
    }

    await deleteGameById(Number(id))

    res.sendStatus(200);
}

export async function allPlatform(req: Request, res: Response) {
    const result = await getAllPlatform();

    res.send(result).status(200)
}

export async function allGames(req: Request, res: Response) {
    const result = await GetAllGames();

    res.send(result).status(200)
}

export async function allGenres(req: Request, res: Response) {
    const result = await getAllGenres();

    res.send(result).status(200)
}

export async function allReviews(req: Request, res: Response) {
    const result = await getAllReviews();

    res.send(result).status(200)
}

export async function updateGameStatus(req: Request, res: Response) {
    const {id} = req.params;
    const {score} = req.body as ReviewBody;
    
    const game = await getGameById(Number(id));

    if(!id || !game){
        res.sendStatus(400);
        return;
    }

    const existingScore = await getScoreByGameId(Number(id))

    if(existingScore){
        await deleteReview(Number(id))
        await updateGame(Number(id), false)
        res.sendStatus(200);
        return
    }

    if(!score){
        res.sendStatus(400)
        return
    }

    await updateGame(Number(id), true)
    await insertReview(Number(id), score)

    res.sendStatus(200);
}
