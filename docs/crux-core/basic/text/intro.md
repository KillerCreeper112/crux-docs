---
title: "Intro"
id: "intro"
---

# Overview

Most text that is handled by Crux or a Crux plugin addon will be handled with Crux's String or Text Component formatter.

Text Components are first analyzed by Crux's String handler and then processed with [MiniMessage](https://docs.papermc.io/adventure/minimessage/format/).

## What is a Text Component?

Minecraft uses text components to render text in certain areas.

For example, an item's name is composed of a text component and its lore is made from a list of text components.

They're useful for displaying text with coloring and styles, like making a piece of text **bold** or *italic*.

## What does the String Handler do?

Crux's string handler processes custom placeholders within a given text.

For example, if you have the text: `<player_name>` and input it in the string handler with the proper context, it may return something like: `killercreepr` or some other player's name.

There are global placeholders can be used despite not having any explicit context. See [Global Placeholders](/docs/crux-core/basic/text/tags/global/).

It also can process equations. See [Text Equations](/docs/text/equations).