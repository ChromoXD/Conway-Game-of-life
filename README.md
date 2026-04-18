# Conway's Game of Life

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

<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(5).jpeg" width="20%">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(1).jpeg" width="20%">

The top cell dies because it only has 0 neighbours.

### 2. Survival

If a living cell has 2 or 3 living neighbors, it survives.

Example:

<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(4).jpeg" width="100%">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11.jpeg" width="100%">

The centre cell survives because it has 2 neighbours.

### 3. Overpopulation

If a living cell has more than 3 living neighbours, it dies.

Example:

<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(2).jpeg" width="100%">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(3).jpeg" width="100%">

The center cell dies because it has 8 neighbors.

### 4. Reproduction

If a dead cell has exactly 3 living neighbors, it becomes alive.

Example:

<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(6).jpeg" width="100%">
<img src="https://github.com/ChromoXD/Conway-Game-of-life/blob/main/src/images/WhatsApp%20Image%202026-04-18%20at%2011.45.11%20(7).jpeg" width="100%">

The empty center-right cell becomes alive because it has exactly 3 neighbors.

---

## Common Patterns

### Still Life

Patterns that never change.

Examples:

- Block
- Beehive
- Loaf

### Oscillator

Patterns that repeat after a certain number of generations.

Examples:

- Blinker
- Toad
- Beacon

![Blinker Pattern](images/blinker.png)
![Toad Pattern](images/toad.png)

### Spaceship

Patterns that move across the grid.

Examples:

- Glider
- Lightweight Spaceship (LWSS)

![Glider Pattern](images/glider.png)
![LWSS Pattern](images/lwss.png)

### Guns

Patterns that continuously generate other patterns.

Examples:

- Gosper Glider Gun

![Gosper Glider Gun](images/gosper-glider-gun.png)

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
