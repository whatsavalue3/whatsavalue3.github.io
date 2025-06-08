# Item

## Properties
### `id` {{string_t}}
The internal ID of the item. 
Required and must be unique.

### `texture` {{string_t}}
Texture of the item.

## Subsections
### Tool
---
### `mining_speed` {{float_t}}
The speed at which the tool mines blocks. 
Higher is faster.

### `damage` {{integer_t}}
The amount of damage in hearts the tool deals to entities.

### `durability` {{integer_t}}
The amount of times the tool can be used.

### `mineable_materials` {{stringarray_t}}
Which materials the tool can mine, and is effective against.
Array must contain valid {{material_t}}s.

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