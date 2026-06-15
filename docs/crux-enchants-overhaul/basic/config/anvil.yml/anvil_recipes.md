# Overview

Allows you to configure custom anvil recipes.

# Layout

```yaml
anvil_recipes:
- key: <key>
  experience_cost: <number provider> # optional
  item_amount_cost: <number provider> # optional
  first_ingredient: <item predicate>
  second_ingredient:
  - <anvil ingredient>
```

# Definition

Each anvil recipe has these parameters:

## key

[Key](/docs/namespace-key)

The recipe's identifier.

:::warning

Make sure each recipe has a unique key!

:::

If no namespace is explicitly provided, `crux` will be used.

## first_ingredient

[Item Predicate](/docs/predicate-item).

Determines which item(s) shall be placed in the first slot of the anvil.

## second_ingredient

Collection of [Anvil Ingredient](/docs/crux-enchants-overhaul/anvil-ingredient)s.

Each ingredient may provide different repairing equations.

## experience_cost

[Number Provider](/docs/number-provider).

Determines the experience level cost to complete the recipe.

## item_amount_cost

[Number Provider](/docs/number-provider).

Optionally, you can define a fixed value or equation that determines how many items from the second ingredient are consumed when the recipe is completed.

:::info

It's generally not advised to use this, since the plugin will automatically try to determine the item amount cost based on how much it repairs.

:::

# Example

```yaml
key: diamond_repair
experience_cost: 0
first_ingredient:
  type: any_of
  values:
    - minecraft:diamond_helmet
    - minecraft:diamond_chestplate
    - minecraft:diamond_leggings
    - minecraft:diamond_boots
    - minecraft:diamond_sword
    - minecraft:diamond_pickaxe
    - minecraft:diamond_axe
    - minecraft:diamond_shovel
    - minecraft:diamond_hoe
    - minecraft:diamond_spear
second_ingredient:
  - ingredient: minecraft:diamond
    repair_amount: <first_item_max_durability> * (.45 * <second_item_amount>)
  - ingredient: minecraft:diamond_block
    repair_amount: <first_item_max_durability> * (4.05 * <second_item_amount>)
```

This example allows diamond to be repaired using diamonds or diamond blocks.

Each diamond will repair 45% of the item's max durability, meaning it will take 3 diamonds to repair a completely damaged item back to 100%.

Each diamond block repairs 405% of the item's maximum durability. Since this exceeds 100%, repairing heavily damaged items with diamond blocks will waste diamonds compared to using individual diamonds.

> `item_amount_cost` is omitted in this example, allowing the plugin to automatically determine the required ingredient amount.

:::info

If you create a custom crux [Item Tag](/docs/tag-item), the `first_ingredient` could potentially be condensed down into:

```yaml
first_ingredient:
  type: any_of
  values:
  - "#crux:diamond_armor"
  - "#crux:diamond_tools"
```

(This assumes `diamond_armor` contains helmet, chestplate, leggings, and boots and `diamond_tools` contains all the diamond tools and weapons)

Or even just:

```yaml
first_ingredient: "#crux:diamond_gear"
```

If you make a tag that includes armor, tools, and weapons. It's totally up to you.

:::