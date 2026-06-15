---
title: "EEnchant"
slug: "/crux-enchants-overhaul/eenchant"
---

# Overview

An EEnchant defines a wrapped Minecraft enchantment that may have additional required values when applying the enchantment, such as item ingredients, power, level, etc.

# Layout

```json
{
  "enchant": <key>,
  "description": "<string>",
  "icon": <dynamic item>,
  "ingredients": <eeingredient calculator>,
  "quality": <number>, // Optional
  "discoverable": true/false, // Optional

  "required_power": <number provider>, // Optional
  "required_level": <number provider>, // Optional
  "required_exp": <number provider>, // Optional
  "required_lapis": <number provider>, // Optional

  "required_power_addon": "<string>", // Optional
  "required_level_addon": "<string>", // Optional
  "required_exp_addon": "<string>", // Optional
  "required_lapis_addon": "<string>" // Optional
}
```

# Definition

## enchant

[Key](/docs/namespace-key)

Points to a Minecraft enchantment.

## description

String

The enchant's description.

## icon

[Dynamic Item](/docs/dynamic-item)

The item icon to be used in menus.

## ingredients

[EEIngredient Calculator](/docs/crux-enchants-overhaul/ingredient-calculator)

The item ingredients required to apply the enchantment via the custom enchanting table menu.

## quality

Double

This value can be used in the `required_` value equations.

## discoverable

Boolean

If false, the enchantment will not show up in the enchanting table.

## required_power

[Number Provider](/docs/number-provider)

How much power the enchanting table must have to apply the enchantment.

:::info

Power is not consumed when an enchantment is applied

:::

## required_level

[Number Provider](/docs/number-provider)

How many experience levels the player must have to apply the enchantment.

:::info

Experience levels are not consumed when an enchantment is applied

:::

## required_exp

[Number Provider](/docs/number-provider)

How many experience points the player must have to apply the enchantment.

:::info

Experience points **are consumed** when an enchantment is applied

:::

## required_lapis

[Number Provider](/docs/number-provider)

How much lapis lazuli is required to apply the enchantment.

:::info

Lapis **is consumed** when an enchantment is applied

:::

## required_power_addon

String

When setting this value, it assumes that there is a `default_required_power` setup, and it is a [Number Provider Equation](/docs/number-provider#equation)

This will add as a prefix to the `default_required_power` equation.

For example, if `default_required_power` = `"5"` and `required_power_addon` = `"1+"`, `required_power` will be: `1+5`.

## required_level_addon

String

When setting this value, it assumes that there is a `default_required_level` setup, and it is a [Number Provider Equation](/docs/number-provider#equation)

This will add as a prefix to the `default_required_level` equation.

## required_exp_addon

String

When setting this value, it assumes that there is a `default_required_exp` setup, and it is a [Number Provider Equation](/docs/number-provider#equation)

This will add as a prefix to the `default_required_exp` equation.

## required_lapis_addon

String

When setting this value, it assumes that there is a `default_required_power` setup, and it is a [Number Provider Equation](/docs/number-provider#equation)

This will add as a prefix to the `default_required_power` equation.

---

# Context

When calculating the enchant requirements, each number provider has access to the following placeholders:
- `level` The level the enchant will be upgraded/set to
  - For example: Sharpness I → II will result in `level = 2`
- `power` The enchanting table's current power
- `quality` The enchant's quality (what you configure)
- `max_level` The enchant's max level

---

# Examples

```json
{
  "enchant": "minecraft:sharpness",
  "description": "Increases attack damage",
  "icon": {
    "material": "minecraft:iron_sword",
    "hide_flags": true
  },
  "ingredients": {
    "type": "amount",
    "ingredients": [
      "minecraft:amethyst_shard"
    ]
  },
  "quality": 1.6,
  "required_power": "(<level> + 3) * <quality>",
  "required_level": "<level> + <quality>",
  "required_exp": "<level> * 20",
  "required_lapis": "<level> + 2"
}
```

If a player is enchanting an item from no Sharpness to Sharpness I (level = 1), the requirements are evaluated as follows:
- `required_power` (1 + 3) = 4
  - 4 * 1.6 = 6.4
  - Result: 6 (rounds down)
- `required_level` 1 + 1.6 = 2.6
  - Result: 2
- `required_exp` 1 * 20 = 20
  - Result: 20
- `required_lapis` 1 + 2 = 3
  - Result: 3

---

```json
{
  "enchant": "minecraft:unbreaking",
  "description": "Chance for an item to avoid durability reduction",
  "icon": "minecraft:iron_block",
  "ingredients": {
    "type": "amount",
    "ingredients": [
      "minecraft:obsidian"
    ]
  },
  "quality": 2,
  "required_exp_addon": "50+",
  "required_lapis_addon": "2+",
  "required_level": 50
}
```

This example expects there to be default required values set.

Let's say these are the set default required values:

```json
{
  "default_required_level": "ceil(1.2 * <math:pow:<level>:1.6> * <quality>)",
  "default_required_power": "ceil(3 * <math:pow:<level>:1.6> * <quality>)",
  "default_required_exp": "floor(10 * <math:pow:<level>:1.5> * <quality>)",
  "default_required_lapis": "ceil(1.5 * <math:pow:<level>:1.3> * <quality>)",
  "default_ingredient_amount": "ceil(1.3 * <math:pow:<level>:1.3> * <quality>)"
}
```

To make it easier when configuring EEnchants, the required `_addon` values simply add as a prefix to the default values.

In this example, for the Unbreaking enchant:
- `required_exp` becomes `50+floor(10 * <math:pow:<level>:1.5> * <quality>)`
- `required_lapis` becomes `2+ceil(1.5 * <math:pow:<level>:1.3> * <quality>)`
- `required_level` becomes a constant 50. Notice it does not have the `_addon` prefix, so it is overwriting `default_required_level`
- `required_power` stays as the default value, `ceil(3 * <math:pow:<level>:1.6> * <quality>)`