---
layout: docs
menu: docs
title: Clearing a selection
permalink: /docs/clear.html
---

The `clear` selection transformation clears all selections made on the visualization:

- For `single` and `multi` selections, it will clear all selected values.
- For `interval` selections, it will clear all selected values and return the visualization to its original scale domain.

It can take one of the following values:

- `false` -- disables clear behavior; there will be no trigger that resets the visualization to its initial configuration.
- A [Vega event stream definition](https://vega.github.io/vega/docs/event-streams/) to indicate which events should trigger clearing of the visualization.

Vega-Lite automatically adds a clear transform to all selections by default. The default is `clear: mouseout` if you're `on: mouseover`, else `clear: dblclick`.

## Examples

Mousing out of the visualization will clear your highlighted value.

<div id="paintbrush_nearest_clear" class="vl-example" data-name="interactive_stocks_nearest_index"></div>

Click and drag to shift the current position of the scales, then double click to reset the scales to their initial configuration.

<div id="selection_resolution_clear" class="vl-example" data-name="selection_resolution_global"></div>
