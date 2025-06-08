# Item
## Properties

---

### `id` {{t|String}}
The internal ID of the item. 
Required and must be unique.

---

### `texture` {{t|String}}
Texture of the item.

## Subsections

---

### Tool

---

### `mining_speed` {{t|Float}}
The speed at which the tool mines blocks. 
Higher is faster.

---

### `damage` {{t|Integer}}
The amount of damage in hearts the tool deals to entities.

---

### `durability` {{t|Integer}}
The amount of times the tool can be used.

---

### `mineable_materials` {{t|StringArray}}
Which materials the tool can mine, and is effective against.
Array must contain valid {{t|Material}}s.

# Examples
Basic item example:
```ini
[Item]
id = red_dye
texture = example/items/red_dye
```
Tool example:
```ini
[Item]
id = dirt_pickaxe
texture = blocks/dirt

[Item.Tool]
mineable_materials = [GROUND, SAND]
mining_speed = 20
damage = 1
durability = 100
```