# Block

## Properties

---

### `id` {{t|String}}
The internal ID of the block. Required.
By defining a block with an existing ID, the original block will be overriden with the new one, replacing all of its properties.

---
### `name` {{t|String}}
Translation key for the inventory tooltip.

Default: `tile.{id}`

---

### `textures` {{t|Array}}
Textures of the block. Required.

Despite the fact that the textures array expects 6 entries (for bottom, top, front, back, right and left faces), there are several predefined configurations that can be used for applying textures easier:
- **If there is only one texture:** it is applied to all faces of the block.
- **If there are 2 textures:** 1st texture is applied to bottom and top faces, and the 2nd one is applied to the rest.
- **If there are 3 textures:** 1st is the bottom face, 2nd is the top face, and the 3rd is applied to the rest of the faces.
- **If there are more than 3 textures but less than 6:** the game will crash. Sorry?

{{n|Note:|Textures must be given in a path format of `(mod name)/path/to/filename` and must not have the `textures` folder or the extension of the file (`.png`) in the path.}}

---

### `fill_textures` {{t|Boolean}}
Disables the automatic configuration of textures.
Used for render types or debugging.

Default: `true`

---

### `bbox` {{t|Bbox}}
The shape of the block.
{{n|Note:|If `bbox` is not the then `opaque_cube` is forced to `false` to prevent visual artifacts.}}
Default: `[0,0,0,1,1,1]` (full block)

---

### `material` {{t|Material}}
The material that the block uses for digging.

Default: `STONE`

---

### `step_sound` {{t|StepSound}}
The sound that is emitted when an entity walks on the block or digs the block.

Default: `STONE`

---

### `hardness` {{t|Float}}
The hardness of the block. 
Affects digging time; higher is slower.

Default: `0.0`

---

### `toughness` {{t|Float}}
The resistance of the block against explosions; higher is more resistant.

Default: `0.0`

---

### `light_value` {{t|Float}}
The amount of light the block emits.
Must be in range from `0.0` to `1.0`; higher is brighter.

Default: `0.0`

---

### `light_opacity` {{t|Integer}}
The amount of light the block passes through itself.
Must be in range from `0` to `255`; higher passes less light through.

Default: `0`

---

### `opaque_cube` {{t|Boolean}}
Toggles culling of neighbouring faces.
Usually used for transparent blocks like leaves.
{{n|Note:|Set to `false` if the block creates transparent sides in blocks that are next to it.}}

Default: `true`

---

### `render_type` {{t|Integer}}
The shape that the block uses.

There are several built-in values (between -1 and 13) that can be used to define how a block looks like:
| Type |Name			|
|:----:|----------------|
|  -1  | Entity model	|
|   0  | Full block		|
|   1  | Plant		 	|
|   2  | Torch		 	|
|   3  | Fire		 	|
|<u>**4**<u/>| <u>**Fluid**<u/>		|
|   5  | Redstone wire	|
|   6  | Crop		 	|
|<u>**7**<u/>| <u>**Door**<u/>		|
|   8  | Ladder			|
|   9  | Minecart track |
|  10  | Stairs			|
|  11  | Fence		 	|
|  12  | Lever		 	|
|  10  | Cactus			|
{{n|Warning!|Underlined types will crash the game if used.
Putting anything that isn't between -1 and 13 will also crash the game. Not sorry this time.}}
{{n|Note:|If `render_type` is not 0 then `opaque_cube` is forced to `false` to prevent visual artifacts.}}

Default: `0` (full block)

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
light_val
```