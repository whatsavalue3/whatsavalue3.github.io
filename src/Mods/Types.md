# Types
### String
A basic string. Can contain text, numbers will be treated as text.
Strings do not require commas and as such they will be treated literally, and must be on a single line.

### Float
A floating point decimal number.

### Integer
A whole number.

### Boolean
A binary toggle. Must be either `true` or `false`.

### Array
Contains several strings. Numbers and spaces will be treated as text. 

### StringArray
Contains several strings. Numbers will be treated as text.
Unlike an Array, any leading spaces will be trimmed.

### Bbox
Technically an Array; Contains several numbers. Usually used to define the shape of a block.

### Material
Technically a String; used to define the material of a block.

Possible values: `AIR`, `GROUND`, `WOOD`, `ROCK`, `IRON`, `WATER`, `LAVA`, `LEAVES`, `PLANTS`, `SPONGE`, `CLOTH`, `FIRE`, `SAND`, `CIRCUITS`, `GLASS`, `TNT`, `SNOW`, `BUILT_SNOW`, `CACTUS`, `CLAY`, `PUMPKIN`, `PORTAL`

### StepSound
Technically a String; used to define the sound that a block emits.

Possible values: `POWDER`, `WOOD`, `GRAVEL`, `GRASS`, `STONE`, `METAL`, `GLASS`, `CLOTH`, `SAND`

# Examples
```ini
name = Uncrafting Table 9000 # String
pi = 3.1415927535 # Float
pi_but_bad = 31415926535 # Integer
sleepy = true # Boolean
cool_things = [friends,code,minecraft] # Array
cool_things = [ friends, code, minecraft ] # StringArray, becomes [friends,code,minecraft]
pi_but_worse = [3.14, 1.59, 2.65, 5.35] # Bbox
material = TNT # Material
step_sound = METAL # StepSound
```