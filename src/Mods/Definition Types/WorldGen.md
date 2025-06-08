# WorldGen

### `chance` {{t|Integer}}
Inverse of the probability for the generator to fire on a chunk.
1: 100% probability
2: 50% probability
3: 33.3% probability
etc.

---

### `count` {{t|Integer}}
Amount of times this generator will fire.

---

### `range` {{t|Integer}}
Variation from `0` to `range` in the y coordinate of the generator.

---

### `offset` {{t|Integer}}
Positive y offset of the generator.

---

### `on_surface` {{t|Boolean}}
Disables the `range` and `offset` values and sets y to the terrain height.

---

# Subsections

## `Flowers`

### `plant` {{t|ID}}
The block to place when generating.

---

## `Tree`

### `wood` {{t|ID}}
The block used as the trunk.

---

### `leaves` {{t|ID}}
The block used as the leaves.

---

## `Ore`

### `ore` {{t|ID}}
The block used as the generated ore.

---

### `size` {{t|Integer}}
Maximum amount of ore blocks to place.

---