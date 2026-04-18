# Conway's Game of Life

<p align="center">
  <h4 align="center"><a href="https://chromoxd.github.io/Conway-Game-of-life/">Play Demo</a></h4></h4>
</p>

A casual implementation of Conway's Game of Life built with JavaScript and Canvas.

This project simulates a cellular automaton where simple rules create surprisingly complex patterns.

---

## What is the Game of Life?

The Game of Life is a zero-player simulation created by mathematician John Conway.

Each square on the grid is either:

- Alive
- Dead

Every frame, the grid updates based on the number of living neighbors around each cell.

Even though the rules are simple, the patterns can become very complex.

---

## Rules

Each cell checks its 8 surrounding neighbours.

### 1. Underpopulation

If a living cell has fewer than 2 living neighbours, it dies.

Example:
<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(5).jpeg" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(1).jpeg" width="20%">
</p>

The top cell dies because it only has 0 neighbours.

### 2. Survival

If a living cell has 2 or 3 living neighbors, it survives.

Example:

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(4).jpeg" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11.jpeg" width="20%">
</p>

The centre cell survives because it has 2 neighbours.

### 3. Overpopulation

If a living cell has more than 3 living neighbours, it dies.

Example:

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(2).jpeg" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(3).jpeg" width="20%">
</p>

The center cell dies because it has 8 neighbors.

### 4. Reproduction

If a dead cell has exactly 3 living neighbors, it becomes alive.

Example:

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(6).jpeg" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(7).jpeg" width="20%">
</p>

The empty center-right cell becomes alive because it has exactly 3 neighbors.

---

## Common Patterns

### Still Life

Patterns that never change.

Examples:

- Block
- Beehive
- Loaf

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/image.png" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/Screenshot%202026-04-18%20123913.png" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/loaf.png" width="20%">
</p>

### Oscillator

Patterns that repeat after a certain number of generations.

Examples:

- Blinker
- Toad
- Beacon

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/Blinker.png" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/Toad.png" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/Beacon.png" width="20%">
</p>

### Spaceship

Patterns that move across the grid.

Examples:

- Glider
- Lightweight Spaceship (LWSS)

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/Glider.png" width="20%">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/LWSS.png" width="20%">
</p>

### Guns

Patterns that continuously generate other patterns.

Examples:

- Gosper Glider Gun

<p align="center">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.28.061.jpeg" width="20%">
</p>

---

## Why This Project is Cool

A few simple rules can create:

- Stable structures
- Infinite loops
- Moving organisms
- Chain reactions
- Massive chaotic systems

The fun part is experimenting with random patterns and seeing what happens.

---

## Tech Used

- JavaScript
- HTML Canvas
- HTML
- CSS
