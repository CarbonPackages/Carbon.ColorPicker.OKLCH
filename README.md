[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.ColorPicker.OKLCH

Color picker for Neos CMS who saves the color in the [`OKLCH`] color space

## Installation

`Carbon.ColorPicker.OKLCH` is available via packagist.
Run the following command in your site package

```bash
composer require --no-update carbon/colorpicker-oklch
```

Then run `composer update` in your project root.

## How the value get stored

The color picker don't store only the given value, it stores an array with following value:

- `hex`: The color in hex format
- `oklch`: The color in the [`OKLCH`] color space
- `coords`: The values in the [`OKLCH`] color space. This is great for any color transformation. Very handy if you use something like the [Tailwind OKLCH Plugin]
- `lightness`: The lightness of the coosen color

```json
{
  "hex": "#65a30d",
  "oklch": "oklch(64.817% 0.17545 131.68)",
  "coords": {
    "l": 0.64817,
    "c": 0.17545,
    "h": 131.68393
  },
  "lightness": 35
}
```

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

### Customization

The editor allows some global default options via your `Settings.yaml` file:

```yaml
Neos:
  Neos:
    Ui:
      frontendConfiguration:
        Carbon.ColorPicker.OKLCH:
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
          # Show slider to st the lightness
          showLightnessSlider: true
          # The precision of the OKLCH color picker. Set to 0 to disable rounding and use the raw values.
          precision: 5
          # The presets are based on https://tailwindcss.com/docs/customizing-colors with the key 600
          # false and null values get filtered out
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
            showLightnessSlider: false
            disable: true
            allowEmpty: false
```

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
