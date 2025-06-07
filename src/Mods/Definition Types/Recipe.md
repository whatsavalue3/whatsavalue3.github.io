# Recipe

|Property|Type|Description|Default value|
|-|-|-|-|
|**pattern**|Array|Rows of the recipe, each *character* corresponds to an item in the palette.||
|**palette**|Array|Pairs of a single character and the id it corresponds to. Even positions have the character, odd positions have the id||
|**result_id**|String|Id of the result||
|**result_amount**|Integer|Amount of the resulting item crafted|1|
|**result_damage**|Integer|Damage of the resulting item crafted|0|

# Examples

```
[Recipe]
pattern=[###,###,###]
palette=[#,cobblestone]
result_id=armored_cobblestone
result_amount=2
```


```
[Recipe]
pattern=[#D]
palette=[#,wool,D,red_dye]
result_id=red_wool
```