import { Router } from "express";
import { addGame, allGenres, allGames, allPlatform, allReviews, deleteGame, updateGameStatus } from "../controllers/gamesControllers.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import GameRatingSchemas from "../schemas/gamesSchema.js";
import scoreSchema from "../schemas/scoreSchema.js";

const GamesRouter = Router();

GamesRouter.get("/games", allGames)
GamesRouter.get("/games/genres", allGenres)
GamesRouter.get("/games/platform", allPlatform)
GamesRouter.get("/games/reviews", allReviews)

GamesRouter.post("/games", schemaValidation(GameRatingSchemas), addGame)

GamesRouter.delete("/games/:id", deleteGame)

GamesRouter.put("/games/:id", schemaValidation(scoreSchema),  updateGameStatus)

export default GamesRouter;
