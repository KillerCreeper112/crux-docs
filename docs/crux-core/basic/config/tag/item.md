---
title: "Item Tag"
slug: "/tag-item"
---

# Overview

Item tags hold a group of item materials.

Minecraft has its own built-in tags, datapacks may add their own, and Crux allows you to add in your own by defining files in the `plugins/CruxCore/tags/item` folder.

Crux provides a built-in way to see all of Minecraft's available tags. Just type in the command:

`/ccore vanilla tag items `

And view the tab complete results.

---

# Creating Crux Tags

Navigate to your server's `plugins/CruxCore/tags/item` folder. If it doesn't exist, you can create the directory yourself.

Within that folder, you can create YAML or JSON files (whatever you prefer) to define custom tags. You can also create sub-folders to group your tags up.

Custom tags are not actually registered to Minecraft's tag registry. But they can be referred to when defining ItemTags anywhere within a Crux plugin.

## Layout

```yaml
values:
- "<item material or minecraft tag>"
```

## Examples

Crux comes with some pre-made tags, such as this one:

```yaml title="plugins/CruxCore/tags/item/wooden_planks.yml"
values:
- '#minecraft:planks'
```

This points to a tag that Minecraft comes pre-built with called "planks". 

---

```yaml
values:
- "minecraft:wooden_pickaxe"
- "minecraft:copper_pickaxe"
- "minecraft:stone_pickaxe"
- "minecraft:iron_pickaxe"
- "minecraft:diamond_pickaxe"
- "minecraft:netherite_pickaxe"
```

A simple tag that includes all of Minecraft's pickaxe items.