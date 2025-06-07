# Mods

A mod is a self-contained bunch of definition files (`.ini`) and textures which are loaded and parsed by Alphabase. 

Mods allow new content like [blocks](Definition%20Types/Block.md), [items](Definition%20Types/Item.md) and [crafting](Definition%20Types/Recipe.md) [recipes](Definition%20Types/Smelting.md) with [convenience](Definition%20Types/Instance.md) to be added into the game at runtime.

Mods can be installed both on client and server by putting them into `.minecraft/mods/`, if installed on a server they will be automatically sent from the server to each client.
They function similar to datapacks due to the fact that they do not require any modifications to base code.

Definition files do not have a specific folder structure, but textures need to be placed in their own `.../your_mod_name/textures/` folder.

Here is an example of a basic folder structure:
```
your_mod_name
├── pack.png
├── pack.txt
├── blocks
│   ├── awesome_plant.ini
│   ╰── custom_block.ini
├── items
│   ├── crazy_hamburger.ini
│   ├── swag_ore.ini
│   ╰── cool
│       ╰── cool_pickaxe.ini
├── textures
│   ├── random_texture.png
│   ├── blocks
│   │   ├── green_stone.png
│   │   ╰── horrible_plant.png
│   ╰── items
│       ╰── cool_pickaxe.png
├── other_thing.ini
┆...
```