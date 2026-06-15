---
title: "Item Predicate"
slug: "/predicate-item"
---

# Overview

An item predicate is a condition that evaluates an item and returns either 'true' or 'false'.

---

# Types

## Material

Returns 'true' if the item is the specified type.

### Layout

```yaml
"<material key>"
```

### Examples

```yaml
"minecraft:diamond"
```

```yaml
"minecraft:grass_block"
```

---

## Any Of

Returns true if any of the children predicates match.

They are checked in the order they are specified in.

### Layout

```yaml
type: "any_of"
values:
- <item predicate>
```

### Examples

```yaml
type: "any_of"
values:
- "minecraft:diamond"
- "minecraft:stone"
- "minecraft:deepslate"
```

More sophisticated and unreasonable way to define the same thing as above:

```yaml
type: "any_of"
values:
- "minecraft:diamond"
- type: "any_of"
  values:
  - "minecraft:deepslate"
  - "minecraft:stone"
```

Returns 'true' if the item is a diamond, stone, or deepslate.

---

## Material Tag

Returns 'true' if the item matches any of the materials provided in an [ItemTag](/docs/tag-item).

### Layout

```yaml
"#<material tag>"
```

### Examples

```yaml
"#minecraft:planks"
```

```yaml
"#crux:wooden_planks"
```

