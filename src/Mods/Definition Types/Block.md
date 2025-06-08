# Block

## Properties

---

### `id` {{string_t}}
The internal ID of the block. Required.
By defining a block with an existing ID, the original block will be overriden with the new one, replacing all properties.

---

### `name` {{string_t}}
Translation key for the inventory tooltip.

Default: `tile.{id}`

---

### `textures` {{array_t}}
Textures of the block.[⁽¹⁾](#Textures) Required.
> **Note:** Textures must be given in a path format of `(mod name)/path/to/filename` and must not have the `textures` folder or the extension of the file (`.png`) in the path.

---

### `fill_textures` {{boolean_t}}
Disables the automatic configuration of textures.
Used for render types[⁽²⁾](#Render%20Types) or debugging.

Default: `true`

---

### `bbox` {{bbox_t}}
The shape of the block.

Default: `[0,0,0,1,1,1]` (full block)

---

### `material` {{material_t}}
The material that the block uses for digging.

Default: `STONE`

---

### `step_sound` {{stepsound_t}}
The sound that is emitted when an entity walks on the block or digs the block.

Default: `STONE`

---

### `hardness` {{float_t}}
The hardness of the block. 
Affects digging time; higher is slower.

Default: `0.0`

---

### `toughness` {{float_t}}
The resistance of the block against explosions; higher is more resistant.

Default: `0.0`

---

### `light_value` {{float_t}}
The amount of light the block emits.
Must be in range from `0.0` to `1.0`; higher is brighter.

Default: `0.0`

---

### `light_opacity` {{integer_t}}
The amount of light the block passes through itself.
Must be in range from `0` to `255`; higher passes less light through.

Default: `0`

---

### `opaque_cube` {{boolean_t}}
Toggles culling of neighbouring faces.
Usually used for transparent blocks like leaves.
> **Note:** Set to `false` if the block creates transparent sides in blocks that are next to it.

Default: `true`

---

### `render_type` {{integer_t}}
The shape that the block looks like.[⁽²⁾](#Render%20Types)
> **Note:** If `render_type` is not 0 then `opaque_cube` is forced to `false` to prevent visual artifacts.

Default: `0` (full block)

## Notes

---

### [⁽¹⁾](#textures) Textures
Despite the fact that the textures array expects 6 entries (for bottom, top, front, back, right and left faces), there are several predefined configurations that can be used for applying textures easier:
- If there is only one texture: it is applied to all faces of the block.
- If there are 2 textures: 1st texture is applied to bottom and top faces, and the 2nd one is applied to the rest.
- If there are 3 textures: 1st is the bottom face, 2nd is the top face, and the 3rd is applied to the rest of the faces.
- If there are more than 3 textures but less than 6: the game will crash. Sorry?

---

### [⁽²⁾](#render_type) Render types
There are several built-in values (between -1 and 13) that can be used to define how a block looks like:
- `-1`: Entity model (sign, invisible)
- `0`: Full block
- `1`: Plant (flowers, reeds)
- `2`: Torch
- `3`: Fire
- `4`: Fluid (water, lava) **(CRASH)**
- `5`: Redstone wire
- `6`: Crop (wheat)
- `7`: Door **(CRASH)**
- `8`: Ladder (invisible)
- `9`: Minecart track
- `10`: Stairs
- `11`: Fence
- `12`: Lever (forces cobblestone texture)
- `13`: Cactus
> **Warning:** Most of these are untested and are very likely to not work correctly.
Putting anything that isn't between -1 and 13 will crash the game. Not sorry this time.

---

# Examples

---

### Custom Bbox example:
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
---

### Render type example:

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

---

### Multiple textures example:
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