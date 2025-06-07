# Block

|Property|Type|Description|Default value|
|-|-|-|-|
|id|String|ID the game will refer to this by. Must be unique||
|name|String|Translation key the game will use to show the tooltip.|`tile.{id}`|
|texture|String|Texture path of the block. Applied to all faces|`blocks/{id}`|
|textures|Array|Textures of all faces. Order: Bottom, Top, Front, Back, Right, Left|`[{texture},{texture},{texture},{texture},{texture},{texture}]`|