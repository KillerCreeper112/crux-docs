---
title: "Configuration"
---

# YAML vs JSON

Most configuration files can be made either as a `.yml` or `.json` file. The format you choose is a matter of personal preference.

Although, this generally does not apply to primary configuration files, like a `config.yml`.

---

:::info

Both of the following examples provide the same result, just in different formats

:::

## YAML Example

```yaml title="plugins/CruxCore/menus/test.yml"
title: Example Title
size: 27
items:
  give_diamond:
    slot: 13
    item:
      material: minecraft:diamond
      lore:
      - "<yellow>Click me for"
      - "<yellow>a diamond!"
    actions:
      any:
      - "[close]"
      - "[console_command] give <player_name> diamond"
      - "[msg] <aqua>Here is your diamond. Enjoy!"
```

## JSON Example

```json title="plugins/CruxCore/menus/test.json
{
  "title": "Example Title",
  "size": 27,
  "items": {
    "give_diamond": {
      "slot": 13,
      "item": {
        "material": "minecraft:diamond",
        "lore": [
          "<yellow>Click me for",
          "<yellow>a diamond!"
        ]
      },
      "actions": {
        "any": [
          "[close]",
          "[console_command] give <player_name> diamond",
          "[msg] <aqua>Here is your diamond. Enjoy!"
        ]
      }
    }
  }
}
```

---