# eslink-react

Figma Sites code layers for the Eslink React components in `packages/eslink-react`.

Each file is one code component:

- default export is the component Figma places on the canvas
- `defineProperties` from `figma:react` exposes the properties panel
- property types stay within `string`, `number`, and `boolean`
- `UiSwitch.checked` uses a `setter` so a bound Figma variable can update
- styles and icons are in the same file, with no npm dependencies

Variant-like fields (`type`, `size`, `color`, `variant`) are strings. Allowed values are listed at the top of each file. Figma code layers do not have an enum property type.

## First three components

| Component | File | Source |
| --- | --- | --- |
| UiButton | `components/UiButton.tsx` | `packages/eslink-react/src/components/ui-button` |
| UiTag | `components/UiTag.tsx` | `packages/eslink-react/src/components/ui-tag` |
| UiSwitch | `components/UiSwitch.tsx` | `packages/eslink-react/src/components/ui-switch` |
