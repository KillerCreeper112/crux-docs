# Overview

Defines all the enchants that show up in the new enchanting table menu.

This config file was made as a JSON by default since the relative complexity of it makes it trickier to read in YAML. You are able to convert it to a YAML file, if you prefer.

# Layout

```json
{
  "default_required_level": "<number provider>", // Optional
  "default_required_power": "<number provider>", // Optional
  "default_required_exp": "<number provider>", // Optional
  "default_required_lapis": "<number provider>", // Optional
  "default_ingredient_amount": "<number provider>", // Optional
  
  "values": [
    <eenchant>
  ]
}
```

# Definition

## values

Collection of [EEnchant](/crux-enchants-overhaul/eenchant)s

# Examples

```json
{
  "default_required_level": "ceil(1.2 * <math:pow:<level>:1.6> * <quality>)",
  "default_required_power": "ceil(3 * <math:pow:<level>:1.6> * <quality>)",
  "default_required_exp": "floor(10 * <math:pow:<level>:1.5> * <quality>)",
  "default_required_lapis": "ceil(1.5 * <math:pow:<level>:1.3> * <quality>)",
  "default_ingredient_amount": "ceil(1.3 * <math:pow:<level>:1.3> * <quality>)",
  
  "values": [
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
      "required_level_addon": "3+",
      "required_exp_addon": "40+",
      "required_lapis_addon": "2+"
    },
    {
      "enchant": "minecraft:channeling",
      "description": "Causes lightning to strike when thrown at an entity or lightning rod during a thunderstorm",
      "icon": {
        "material": "minecraft:trident",
        "hide_flags": true
      },
      "ingredients": {
        "type": "all_of",
        "children": [
          {
            "type": "amount",
            "ingredients": [
              "minecraft:heart_of_the_sea"
            ],
            "amount": "ceil(1 * <math:pow:<level>:1> * <quality>)"
          },
          {
            "type": "amount",
            "ingredients": [
              "minecraft:amethyst_shard"
            ],
            "amount": "ceil(1.2 * <math:pow:<level>:1.2> * <quality>)"
          },
          {
            "type": "amount",
            "ingredients": [
              "minecraft:lightning_rod"
            ],
            "amount": "ceil(1.6 * <math:pow:<level>:1.6> * <quality>)"
          }
        ]
      },
      "quality": 2,
      "required_level_addon": "30+",
      "required_exp_addon": "200+",
      "required_lapis_addon": "15+",
      "required_power": "ceil(3 * <math:pow:<level_zero>:1.8> * <quality>)"
    },
    {
      "enchant": "minecraft:mending",
      "description": "Restores an item's durability when the user collects experience orbs",
      "icon": "minecraft:nether_star",
      "ingredients": {
        "type": "amount",
        "ingredients": [
          "minecraft:nether_star"
        ]
      },
      "discoverable": false,
      "quality": 10,
      "required_level": "25",
      "required_exp": "350",
      "required_lapis": "32",
      "required_power": "100"
    }
  ]
}
```