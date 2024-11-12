import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    player1: String,
    player2: String,
    winner: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Game', gameSchema);