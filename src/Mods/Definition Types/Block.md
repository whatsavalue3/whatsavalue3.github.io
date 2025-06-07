# Block

|Property|Type|Description|Default value|
|-|-|-|-|
|**id**|String|ID the game will refer to this by. Must be unique.||
|**name**|String|Translation key the game will use to show the tooltip.|`tile.{id}`|
|**textures**|Array|Textures of all faces. Order: Bottom, Top, Front, Back, Right, Left.||
|**bbox**|Bbox|Size of the block.|`[0,0,0,1,1,1]`|
|**material**|Material|Block material.|`STONE`|
|**hardness**|Float|How hard it is to mine this block.|`0`|
|**toughness**|Float|How explosion resistant this block is.|`0`|
|**step_sound**|StepSound|Sound this block makes|`STONE`|
|**light_value**|Float|How much light this block emits. Range: `0.0 - 1.0` | `0`|
|**light_opacity**|Integer|How much light this block lets through. Range: `0 - 255` | `0`|
|**opaque_cube**|Boolean|Does this block obscure faces around it. Change this if you have issues with xraying faces.|`true`|

## Examples

```ini
[Block]
id = armored_cobblestone
texture = example/blocks/armored_cobblestone
hardness = 3
resistance = 20
material = ROCK
```


```ini
[Block]
id = cobblestone_pole
texture = blocks/cobblestone
bbox = [0.25,0,0.25,0.75,1,0.75]
opaque_cube = false
hardness = 2
resistance = 10
material = ROCK
```