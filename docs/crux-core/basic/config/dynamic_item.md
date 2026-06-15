---
title: "Dynamic Item"
slug: "/dynamic-item"
---

# Overview

A DynamicItem holds information on how an item shall be constructed.

It can be dynamic in certain cases where context is provided and specific placeholders can be used.

---

# Layout

```yaml
# All fields are Optional.
# The only field that is going to be required
# in most circumstances is the 'material' field.
material: "<item type>"
amount: <number provider>
name: "<string>"
custom_name: "<string>"
unbreakable: true/false
enchant_glint_override: true/false
lore:
  - "<string>"
```

# Definition

## material

String

Sets the item's type.

## amount

[Number Provider](/number-provider)

The item's count.

## max_stack_size

[Number Provider](/number-provider)

The item's max count/amount.

## name

String

Sets the item's [Item Name Component](https://minecraft.wiki/w/Data_component_format#item_name).

## custom_name

String

Sets the item's [Custom Name Component](https://minecraft.wiki/w/Data_component_format#custom_name).

## lore

List of Strings

Sets the item's [Lore Component](https://minecraft.wiki/w/Data_component_format#lore).

Lists additional text in the item's tooltip.

## unbreakable

Boolean

Sets the item's [Unbreakable Component](https://minecraft.wiki/w/Data_component_format#unbreakable).

If it's true, the item will not take any durablity damage.

## enchant_glint_override

Boolean

Sets the item's [Enchantment Glint Override Component](https://minecraft.wiki/w/Data_component_format#enchantment_glint_override).

If it's true, the item will display a glint, like it's enchanted.

If it's false, the item will not display any glint even if it is enchanted.

# Examples

```yaml
material: minecraft:diamond
name: <rainbow>Super Awesome Rainbow Diamond!
lore:
- <red>What a beautiful
- <aqua>day it is to have
- <red>a sweet diamond
enchant_glint_override: true
```

```yaml
material: minecraft:bow
amount: 4
max_stack_size: 16
name: "<aqua>Stackable Bow"
lore:
- "<gray>A bow that is stackable"
- "<gray>up to <white><bold>16</bold></white>?"
- "<gray>Now that.. is pretty <red>awesome"
```

```yaml
material: minecraft:dirt
amount:
  min: 1
  max: 64
name: Random Stack Dirt
lore:
- "<yellow>This item will have a different count"
- "<yellow>every time it is created!"
```