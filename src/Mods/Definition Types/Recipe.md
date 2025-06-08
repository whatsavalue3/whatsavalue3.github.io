# Recipe

### `pattern` ([StringArray](../Types.html#stringarray))
Rows of the recipe, each character in a row corresponds to an item in the palette.

### `palette` ([Array](../Types.html#array))
Pairs of a single character and the item/block id it should match to.

### `result_id` {{string_t}}
The block/item obtained from this recipe.

### `result_amount` ([Integer](../Types.html#integer))
Amount of crafted blocks/items.

Default: `1`

### `result_damage` ([Integer](../Types.html#integer))
Damage that the crafted item has. This can only be used on tools and armor.

Default: `0`

# Examples
Several items example:
```ini
[Recipe]
pattern=[###,###,###]
palette=[#,cobblestone]
result_id=armored_cobblestone
result_amount=2
```
Shapeless with several items example:
```ini
[Recipe]
pattern=[#D]
palette=[#,wool, D,red_dye]
result_id=red_wool
```