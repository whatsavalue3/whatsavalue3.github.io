# Instance
Instances allow for registering things in bulk by replacing specific parts using arguments.

## Properties

---

### `id` {{t|String}}
The only property that an instance has. This is the path to the template that will be used.
{{n|Note:|Template must be given as `(modname)/filename` (no extension)}}

## Subsections

---

Definitions can have subsections specified by a `.` in the section name, followed by the subsections name.
Subsections can contain properties similar to usual definitions.

### Args

---

A list of key-value pairs for each replacement a template may have.

# Template
Templates contain things that an instance may request to register, alongside placeholder strings that are replaced with arguments that are given by an instance.

## Properties

---

Templates lack any sort of properties, instead inheriting them from subsections.

Refer to [Block](Block.html), [Item](Item.html), [Recipe](Recipe.html) and [Smeltig](Smelting.html) for their respective properties.

## Subsections

---

By making a definition into a subsection of `Template` it can be used inside a template, which allows the definitions to contain `{placeholder}` strings that an instance can replace.

# Examples
```ini
[Instance]
id = example/templates/combine_recipe_and_block

[Instance.Args]
item1 = dirt
item2 = gravel
result = coarse_dirt
```
in `example/templates/combine_recipe_and_block`:
```ini
[Template]

[Template.Block]
id = {result}
texture = example/blocks/{result}
hardness = 0.8

[Template.Recipe]
pattern = [AB]
palette = [A,{item1}, B,{item2}]
result_id = {result}
```
---