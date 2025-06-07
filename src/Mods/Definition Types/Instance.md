# Instance

|Property|Type|Description|Default value|
|-|-|-|-|
|**id**|String|Path to the template to instantiate.||

## Subsections

### Args

Optional

|Property|Type|Description|Default value|
|-|-|-|-|
|**\***|String|Argument that gets passed to the template.||


## Examples

---

```ini
[Instance]
id=example/templates/combine_recipe_and_block

[Instance.Args]
item1=dirt
item2=gravel
result=coarse_dirt
```

example/templates/combine_recipe_and_block:

```ini
[Template]

[Template.Block]
id = {result}
texture = example/blocks/{result}
hardness = 0.8

[Template.Recipe]
pattern=[AB]
palette=[A,{item1},B,{item2}]
result_id={result}
```

---