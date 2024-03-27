[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.ColorPicker.OKLCH

Color picker for Neos CMS who saves the color in the [`OKLCH`] color space.

There are many options on how the picker should look like:

Here you can see some of the combinations:

![screenshot]

## Installation

`Carbon.ColorPicker.OKLCH` is available via packagist.
Run the following command in your site package

```bash
composer require --no-update carbon/colorpicker-oklch
```

Then run `composer update` in your project root.

## How the value get stored

### Mode `all`

If the `mode` ist set to `all` (which is the default), the color picker don't store only the given value, it stores an array with following values:

- `hex`: The color in hex format
- `oklch`: The color in the [`OKLCH`] color space
- `coords`: The values in the [`OKLCH`] color space. This is great for any color transformation. Very handy if you use something like the [Tailwind OKLCH Plugin]

```json
{
  "hex": "#65a30d",
  "oklch": "oklch(64.817% 0.17545 131.68)",
  "coords": {
    "l": 0.64817,
    "c": 0.17545,
    "h": 131.68393
  }
}
```

### Mode `coords`

If the `mode` ist set to `coords`, the color picker stores the coordinates of the [`OKLCH`] color as array:

```json
{
  "l": 0.64817,
  "c": 0.17545,
  "h": 131.68393
}
```

### Mode `hex`

If the `mode` ist set to `hex`, the color picker stores the hex color value: `#65a30d`

### Mode `oklch`

If the `mode` ist set to `oklch`, the color picker stores the [`OKLCH`] color as string: `oklch(64.817% 0.17545 131.68)`

## Settings

Add a property of type array and configure the editor as seen in this example:

```yaml
Foo.Bar:Your.Prototype:
  properties:
    colorOKLCH:
      type: array
      ui:
        label: OKLCH Color
        inspector:
          editor: "Carbon.ColorPicker/OKLCH"
          group: yourGroupName
```

If you set mode to `hex` or `oklch` the type has to be `string`:

```yaml
Foo.Bar:Your.Prototype:
  properties:
    colorOKLCH:
      type: string
      ui:
        label: OKLCH Color
        inspector:
          editor: "Carbon.ColorPicker/OKLCH"
          group: yourGroupName
          editorOptions:
            mode: oklch
```

### Customization

The editor allows some global default options via your `Settings.yaml` file:

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        Carbon.ColorPicker.OKLCH:
          # Set the mode of the color picker. Possible values are: 'oklch', 'hex', 'coords', 'all'
          mode: "all"
          # Disable the color picker
          disable: false
          # Allow empty values
          allowEmpty: true
          # Show preset selector
          showPresets: true
          # Show input field for hex input
          showHexInput: true
          # Show color picker
          showPicker: true
          # Show slider to set the lightness
          showLightness: false
          # Show slider to set the luminance
          showLuminance: false
          # Collapse the color picker (enables only when showPicker is true)
          collapsed: false
          # The precision of the OKLCH color picker. Set to 0 to disable rounding and use the raw values.
          precision: 5
          # The presets are based on https://tailwindcss.com/docs/customizing-colors with the key 600
          # false and null values get filtered out. You can also disable all presets with presets: false
          presets:
            slate: "#475569"
            gray: "#4b5563"
            zinc: "#52525b"
            neutral: "#525252"
            stone: "#57534e"
            red: "#dc2626"
            orange: "#ea580c"
            amber: "#d97706"
            yellow: "#ca8a04"
            lime: "#65a30d"
            green: "#16a34a"
            emerald: "#059669"
            teal: "#0d9488"
            cyan: "#0891b2"
            sky: "#0284c7"
            blue: "#2563eb"
            indigo: "#4f46e5"
            violet: "#7c3aed"
            purple: "#9333ea"
            fuchsia: "#c026d3"
            pink: "#db2777"
            rose: "#e11d48"
```

The settings can also be set in your property configuration:

```yaml
Foo.Bar:Your.Prototype:
  properties:
    colorOKLCH:
      type: array
      ui:
        label: OKLCH Color
        inspector:
          editor: "Carbon.ColorPicker/OKLCH"
          group: yourGroupName
          editorOptions:
            showLightness: true
            showLuminance: true
            disable: true
            allowEmpty: false
            collapsed: true
            presets:
              red: "#dc2626"
              orange: "#ea580c"
```

[screenshot]: https://github.com/CarbonPackages/Carbon.ColorPicker.OKLCH/assets/4510166/b604eb5a-cce6-4fb2-829d-d0c091be9758
[tailwind oklch plugin]: https://github.com/MartijnCuppens/tailwindcss-oklch
[`oklch`]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
[packagist]: https://packagist.org/packages/carbon/colorpicker-oklch
[latest stable version]: https://poser.pugx.org/carbon/colorpicker-oklch/v/stable
[total downloads]: https://poser.pugx.org/carbon/colorpicker-oklch/downloads
[license]: https://poser.pugx.org/carbon/colorpicker-oklch/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.ColorPicker.OKLCH.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.ColorPicker.OKLCH.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.ColorPicker.OKLCH.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.ColorPicker.OKLCH/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.ColorPicker.OKLCH/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.ColorPicker.OKLCH/subscription
