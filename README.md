# React Players Points Table

## Overview

This React application, developed by Bartosz Kulpa, displays a table of players and their respective points. It includes functionality to fetch player data and calculate total and average points. The application also allows changing the color of rows for players with points greater than 100.

## Features

### Dynamic Data Fetching

- Fetches player data from `players.json`.
- Updates the table with fetched data.

### Table of Players

- Displays each player's username and points.
- Highlights players with more than 100 points in a specified color (`red` or `blue`).

### Summary Calculation

- Calculates and displays the total points and average points of all players.

### Color Toggle

- Provides buttons to change the color of highlighted rows in the table.

## React Components

### `ListPlayers`

- Manages the state of players, summary, and color.
- Implements `useEffect` to fetch and process player data on component mount.
- Renders the table of players and summary rows.
- Includes buttons to toggle row color based on points.

## Setup and Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.

### Running the Application

1. After installing dependencies, start the application using `npm start`.
2. View the application in your browser at the address specified (usually `http://localhost:3000`).

## Usage

### Interacting with the Application

- View the table of players with their respective points.
- Use the 'Red' and 'Blue' buttons to change the color of rows for players with points over 100.
- Observe the calculated total and average points at the bottom of the table.

## Note

- The application serves as a demonstration of React state management, fetching data from a local JSON file, and rendering dynamic content based on state changes.
- It showcases fundamental React concepts like state, effects, and conditional rendering.
