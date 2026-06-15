---
title: "Text Tags"
slug: "/text-tags"
---

# Intro

Crux has its own robust placeholder/tags system.

This system mainly revolves around building tags for supported objects, like an Entity or [Item Stack](/docs/text-tags/item-stack).

# Prefixes

Each object has their own default prefix.

We'll take the Player object for an example- its default prefix is `player_`.

That means any of the placeholders that it carries must be followed by the `player_` prefix, like `player_health` (which will return the player's current health value).

---

However, that default prefix can be overwritten, depending on the context.

For example, what happens if you have a situation where the player damages another player, and you need the ability to get the attacker's health and victim's health?

Well, the plugin can hook each player in with a different prefix. In the context of a player damaging another player, it may set the attacking player's prefix as `attacker_` and the victim's prefix as `victim_`.

That way, you use `attacker_health` and `victim_health` to get the attacker's and victim's health respectively.

# Format

There are 2 different kinds of placeholders:

## String Placeholder

String placeholders are singular pieces of text. To use a String Placeholder, you simply wrap it with `<>`.

For example, `<test>` may return `Some text!`.

If you use `<test>` in a string like this: `This is a sample <test>`

It will output:

`This is a sample Some text!`

---

## String List Placeholder

String list placeholders provide a list of text. This is especially perfect for item lore. To use a String List placeholder, you wrap it with `{}`.

For example, `{test}` may return `["First Line", "second Line"]`.

If you use `{test}` in a list like this: `["This is a sample", "{test}", "Let's continue"]`

It will output:

`["This is a sample", "First Line", "second Line", "Let's continue"]`

---

# Variables

Certain placeholders may accept variables. Variables are separated with `:`.

For example, let's say we have a placeholder `<multiply_by_2:(number)>`. It accepts a single variable, which must be a number and returns that number multiplied by 2.

If you input: `<multiply_by_2:5>`, it may return `10`.

Or let's say we have a placeholder `<repeat:(amount):(text):(end_text)>`. Now there are 3 variables at play here.
- (amount) decides how many times it will repeat the (text)
- (end_text) will simply just be added on to the repeated text

If you input: `<repeat:2:test:end>`, it will return `testtestend`

Placeholders can be used in both, String placeholders and String List placeholders.

:::info

To input other placeholders in a variable or strings with `<`, `>`, `{`, `}`, or `:`, you can wrap the variable in quotes:

`<repeat:2:"<multiply_by_2:10>":" Success!">` will return `2020 Success!`

:::