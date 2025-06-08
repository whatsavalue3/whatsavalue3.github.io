# Types

---

## String
A basic string. Can contain text, numbers will be treated as text.
Strings do not require commas and as such they will be treated literally, and must be on a single line.

Example: `name = Uncrafting Table 9000`

---

## Integer
A whole number.

Example: `pi_but_bad = 31415926535`

---

## Float
A floating point decimal number.

Example: `pi = 3.1415927535`

---

## Boolean
A binary toggle. Must be either `true` or `false`.

Example: `sleepy = true`

---

## Array
Contains several strings. Numbers and spaces will be treated as text. 

Example: `cool_things = [friends,code,minecraft]`

---

## StringArray
Contains several strings. Numbers will be treated as text.
Unlike an Array, any leading spaces will be trimmed.

Example: `cool_things = [ friends, code, minecraft ]` (becomes `[friends,code,minecraft]`)

---

## Bbox
Array of 6 numbers. Usually used to define the shape of a block.

Example: `pi_but_worse = [3.14, 1.59, 2.65, 5.35, 0, 0]`

---

## Material
Technically a String; used to define the material of a block.

Possible values: `AIR`, `GROUND`, `WOOD`, `ROCK`, `IRON`, `WATER`, `LAVA`, `LEAVES`, `PLANTS`, `SPONGE`, `CLOTH`, `FIRE`, `SAND`, `CIRCUITS`, `GLASS`, `TNT`, `SNOW`, `BUILT_SNOW`, `CACTUS`, `CLAY`, `PUMPKIN`, `PORTAL`

Example: `step_sound = METAL`

---

## StepSound
Technically a String; used to define the sound that a block emits.

Possible values: `POWDER`, `WOOD`, `GRAVEL`, `GRASS`, `STONE`, `METAL`, `GLASS`, `CLOTH`, `SAND`


Example: `material = TNT`