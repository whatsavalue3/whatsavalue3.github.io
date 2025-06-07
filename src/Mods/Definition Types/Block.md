# Block

## Properties
### `id` ([String](../Types.md#String))
The internal ID of the block. 
Must be unique.

### `name` ([String](../Types.md#String))
Translation key for the inventory tooltip.

Default: `tile.{id}`

### `textures` ([Array](../Types.md#Array))
Textures of the block.[[1]](#Textures)
> **Note:** Texture must be given as `(modname)/filename` (no extension)

### `bbox` ([Bbox](../Types.md#Bbox))
The shape of the block.

Default: `[0,0,0,1,1,1]` (full block)

### `material` ([Material](../Types.md#Material))
The material that the block uses for digging.

Default: `STONE`

### `step_sound` ([StepSound](../Types.md#StepSound))
The sound that is emitted when an entity walks ontop or digs the block.

Default: `STONE`

### `hardness` ([Float](../Types.md#Float))
The hardness of the block. 
Affects digging time; higher is slower.

Default: `0.0`

### `toughness` ([Float](../Types.md#Float))
The resistance against explosions of the block. 
Higher is more resistant.

Default: `0.0`

### `light_value` ([Float](../Types.md#Float))
The amount of light the block emits.
Must be in range from `0.0` to `1.0`.

Default: `0.0`

### `light_opacity` ([Integer](../Types.md#Integer))
The amount of light the block passes trough itself.
Must be in range from `0` to `255`.

Default: `0`

### `opaque_cube` ([Boolean](../Types.md#Boolean))
Disables culling of neighbouring faces.
Usually used for transparent blocks like leaves.
> **Note:** Set to `false` if the block creates holes in blocks.

Default: `true`

### `render_type` ([Integer](../Types.md#Integer))
The shape that the block looks like.[[2]](#Render types)
> **Note:** If `render_type` is not 0 then `opaque_cube` is forced to `false` to prevent visual artifacts.

Default: `0` (full block)

## Notes

### Textures
Despite the fact that the textures array expects 6 entries (for bottom, top, front, back, right and left faces), there are several predefined configurations that can be used for easier texture applying:
- If there is only one texture, it is applied on all faces
- If there are 2 textures, 1st texture is applied to bottom and top, and the 2nd one is applied to the rest of the faces
- If there are 3 textures, 1st and 2nd textures are applied to the bottom and top faces, and the 3rd one is applied to the rest of the faces
- If there are more than 3 textures but less than 6, the game will crash

### Render types
There are several possible values built-in values that can be used to define how a block looks like: 
- `-1`: Entity model (sign)
- `1`: Plant (flowers, reeds)
- `2`: Torch
- `3`: Fire
- `4`: Fluid (water, lava)
- `5`: Redstone wire
- `6`: Crop (wheat)
- `7`: Door
- `8`: Ladder
- `9`: Minecart track
- `10`: Stairs
- `11`: Fence
- `12`: Lever
- `13`: Cactus
> **Warning:** Most of these are untested and are very unlikely to work correctly.

# Examples
Custom Bbox example:
```ini
[Block]
id = cobblestone_pole
textures = [blocks/cobblestone]
bbox = [0.25,0,0.25,0.75,1,0.75]
opaque_cube = false
hardness = 2
resistance = 10
material = ROCK
```
Render type example:
```ini
[Block]
id = crystal_growth
textures = [awesome_mod/crystal_growth]
material = GLASS
step_sound = GLASS
hardness = 0.8
resistance = 4
light_value = 0.8
render_type = 1
```
Multiple textures example:
```ini
[Block]
id = crystal_block
textures = [awesome_mod/crystal_block_bottom, awesome_mod/crystal_block_side, awesome_mod/crystal_block_top]
material = GLASS
step_sound = GLASS
hardness = 15
resistance = 12
light_value = 0.7
```