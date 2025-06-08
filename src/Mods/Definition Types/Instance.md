# Instance
Instances allow for registering things in bulk by replacing specific parts using Arguments.

## Properties
### `id` ([String](../Types.html#string))
The only property that an Instance has. Path to the Template that will be used.
> **Note:** Template must be given as `(modname)/filename` (no extension)

## Subsections
Definitions can have subsections specified by a `.` in the section name, followed by the subsections name.

### Args
A list of key-value pairs for each replacement a Template may have.

# Template
Templates contain things that an Instance may request to register, alongside placeholder strings that are replaced with Arguments that are given by an Instance.

## Properties
Templates lack any sort of properties, instead inheriting them from Subsections.

Refer to [Block](Block.html), [Item](Block.html), [Recipe](Block.html) and [Smeltig](Block.html) for their respective properties.

## Subsections
By adding a usual definition to a `Template` subsection it can be used inside a Template, which allows the definitions to contain `{placeholder}` strings that an Instance can replace.

# Examples
```ini
[Instance]
id=example/templates/combine_recipe_and_block

[Instance.Args]
item1=dirt
item2=gravel
result=coarse_dirt
```
in `example/templates/combine_recipe_and_block`:
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