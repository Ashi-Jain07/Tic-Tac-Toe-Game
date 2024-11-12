import gameModel from "../Model/game.model.js";

//Api to save players name and winners name in database
export async function saveGameResult(req, res) {
    const { player1, player2, winner } = req.body;

    if (!player1 || !player2 || !winner) {
        return res.status(400).json({ message: "Enter Player Name" })
    }

    try {
        const game = new gameModel({ player1, player2, winner });
        await game.save();
        res.status(201).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Api to fetch results from database
export async function getAllResults(req, res) {
    try {
        const results = await gameModel.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
