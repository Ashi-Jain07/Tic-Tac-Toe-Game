import { getAllResults, saveGameResult } from "../Controller/game.controller.js";

export function userRoutes(app) {
    app.post("/save", saveGameResult);
    app.get("/results", getAllResults);
}