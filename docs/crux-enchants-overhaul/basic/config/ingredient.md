---
title: "Anvil Ingredient"
slug: "/crux-enchants-overhaul/anvil-ingredient"
---

# Overview

An Anvil Ingredient provides information on what item(s) may be accepted as the second ingredient in an anvil and how the ingredient will affect the outcome.

# Types

## Repair

When repairing, the context provides tags for the first item that was inputted (the item to be repaired) and the second item (the item to use for the repairing).

The first item has a tag prefix of `first_item_`.

The second item has a tag prefix of `second_item_`.

:::info

See [Text Tags](/docs/text-tags) for more information regarding tag prefixes and placeholders.

See [Item Stack Tags](/docs/text-tags/item-stack) for information regarding the tags that Item Stacks provide.

:::

### Layout

```yaml
ingredient: <item predicate>
repair_amount: <number provider>
```

---

### Definition

## ingredient

[Item Predicate](/docs/predicate-item)

What item(s) should be considered a valid ingredient.

## repair_amount

[Number Provider](/docs/number-provider)

How much durability the ingredient should mend.

---

### Examples

```yaml
ingredient: minecraft:iron_ingot
repair_amount: <first_item_max_durability> * (.45 * <second_item_amount>)
```

This makes it so for every iron ingot, it will repair 45% of the item's max durability.

For example:
- Let's say we have an iron chestplate with 100 max durability
- That iron chestplate has 1 remaining durability
- For every 1 iron ingot that is used to repair it, it will give +45 durability
- So it will take 3 iron ingots in total to repair the iron chestplate fully