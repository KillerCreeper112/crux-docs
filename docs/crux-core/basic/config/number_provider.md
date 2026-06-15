---
title: "Number Provider"
slug: "/number-provider"
---

# Overview

A Number Provider simply outputs a number. They can be as simple as a constant number or as complex as an equation.

---

# Types

## Constant

Constants are defined numbers which do not change.

### Layout

```yaml
<number>
```

### Examples

```yaml
0.5
```

```yaml
4
```

```yaml
100.32
```

---

## Equation

Crux uses [Crunch](https://github.com/boxbeam/Crunch#operations-and-syntax) to evaluate equations.

### Layout

```yaml
"<equation>"
```

### Examples

```yaml
"5 * 3"
```

---

If the number you are configuring is being used in a context which supports placeholders, you can absolutely use them in your equations.

The available placeholders depends on the context.

```yaml
"2 * <player_health>"
```

---

## Uniform

Selects a random number from the defined minimum and maximum values. Both, the min and max values are inclusive.

### Layout

```yaml
min: <number provider>
max: <number provider>
```

---

Can also be defined by separating the min and max values by a comma:

```yaml
"<min>,<max>"
```

### Examples

```yaml
min: 3
max: 5
```

```yaml
min: 100
max: "100 + 10 * 2" # Will result in 120 because 10 * 2 = 20 and then 100 + 20 = 120
```

```yaml
"2,5" # Will pick a random number between 2-5
```

---

## Uniform Array

Selects a random number from the defined list of values.

### Layout

```yaml
- <number provider>
```

### Examples

```yaml
- 2
- 10
- "<player_health> + 3"
- [6, 2, 1] # Defining another Uniform Array that will pick 6, 2, or 1
```

---

```yaml
[8, 10, 100, 1]
```

This will pick a random number: 8, 10, 100, or 1

---

## Uniform Skewed

Selects a randomly number from the defined minimum and maximum values but may lean more toward the min or max. Both, the min and max values are inclusive.

If the skew is higher, the more likely it is for it to generate a higher number.
If the skew is lower, the more likely it is for it to generate a lower number.

For example:
* A skew factor of 0.2 will make it more likely for the function to generate a lower number.
* A skew factor of 2 will make it more likely for the function to generate a higher number.
* A skew factor of 1 will have equal chance (no skewed results).

### Layout

```yaml
min: <number provider>
max: <number provider>
skew: <number provider>
```

---

Can also be defined by separating the min and max values by a comma:

```yaml
"<min>,<max>,<skew>"
```

### Examples

```yaml
min: 2
max: 5
skew: 0.1
```

This will generate a random number between 2-5 but most of the time, you'll get results that are closer to 2.

---

```yaml
"8,100,3"
```

Generates a random number between 8-100 but most of the time, you'll get results that are closer to 100.