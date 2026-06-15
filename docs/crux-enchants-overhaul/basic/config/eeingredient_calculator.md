---
title: "EEIngredient Calculator"
slug: "/crux-enchants-overhaul/ingredient-calculator"
---

# Overview

The ingredient calculator 

# Types

## Amount

Creates an ingredient that may have a dynamic amount.

If you do not specify `amount`, `default_ingredient_amount` will be expected to be present.

### Layout

```json
{
  "type": "amount",
  "ingredients": [
    <item predicate>
  ],
  "amount": <number provider> // Optional
}
```

### Examples

```json
{
  "type": "amount",
  "ingredients": [
    "minecraft:diamond"
  ],
  "amount": "<level> * <quality>"
}
```

In this example, if the player is upgrading Unbreaking II → III (and if Unbreaking has a quality of 2.0), it will cost 6 diamonds.

`3 * 2` = `6` diamonds

## All Of

### Layout

```json
{
  "type": "all_of",
  "children": [
    <eeingredient calculator>
  ]
}
```

### Examples

```json
{
  "type": "all_of",
  "children": [
    {
      "type": "amount",
      "ingredients": [
        "minecraft:heart_of_the_sea"
      ],
      "amount": "1 + <level> * <quality>"
    },
    {
      "type": "amount",
      "ingredients": [
        "minecraft:amethyst_shard"
      ],
      "amount": "5 + <level> * <quality>"
    },
    {
      "type": "amount",
      "ingredients": [
        "minecraft:lightning_rod"
      ],
      "amount": "3 + <level>"
    }
  ]
}
```