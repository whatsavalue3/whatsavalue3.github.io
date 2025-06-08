# Mods

A mod is a self-contained collection of definition files (`.ini`) and texture files (`.png`) which are loaded and parsed by Alphabase.

Mods allow new content to be added into the game at runtime - such as [blocks](Definition%20Types/Block.html), [items](Definition%20Types/Item.html) and [crafting recipes](Definition%20Types/Recipe.html) - [conveniently](Definition%20Types/Instance.html) and without modifying the base code. This makes them similar to datapacks.

Mods can be installed both on the client and the server - by putting them into `.minecraft/mods/`. When a mod is installed on a server, it will be automatically sent from the server to all clients that are connecting to that server.

Definition files do not have a specific folder structure, but textures need to be placed in their own folder. Example: `.../your_mod_name/textures/`

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
