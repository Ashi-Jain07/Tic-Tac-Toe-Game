# Tic-Tac-Toe Game

A simple full-stack Tic-Tac-Toe application built with **Next.js**, **Node.js**, **Express**, and **MongoDB**. The game allows two users to enter their names, play a game, store the match results in a database, and display the results on the frontend.

## Technologies Used

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS

## Features

1. **Home Page**:
   - Users can enter their names and start the game.
   - A "Start Game" button navigates to the game page.
   - Displays the game results from the database.

2. **Game Page**:
   - Players can take turns playing the game.
   - The game state is reset by clicking the "Reset Game" button.
   - After the game is over, the result is automatically displayed on the results page.

3. **Results Page**:
   - Displays the match results fetched from the database.
   - Shows who won the game or if it was a draw.