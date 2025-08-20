<?php

namespace Carbon\ColorPicker\OKLCH\EelHelper;

use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;
use matthieumastadenis\couleur\ColorFactory;

/**
 * @phpstan-type ColorCoords array{l: float|int, c: float|int, h: float|int}
 * @phpstan-type HexColor string
 * @phpstan-type OklchColor string
 * @phpstan-type CustomProperty array{coords: string, oklch: OklchColor, hex: HexColor}
 * @phpstan-type ColorArray array{hex: HexColor, oklch: OklchColor, coords: ColorCoords, customProperty: CustomProperty}
 */
#[Flow\Proxy('false')]
class ConvertHelper implements ProtectedContextAwareInterface
{
    /**
     * Convert color to oklch object. Make sure it has the same format has the OKLCH color picker
     *
     * @param string|array $color
     * @param integer $precision
     * @param string $customPropertyName
     * @return ColorArray|null
     */
    public function toOkLch(
        string|array $color,
        int $precision = 5,
        string $customPropertyName = 'color',
    ): ?array {
        try {
            $factory = ColorFactory::newOkLch($color, null, null, true);
        }
        catch (\Exception $e) {
            return null;
        }
        [$l, $c, $h] = $factory->coordinates();
        $huePrecision = $precision > 3 ? $precision - 3 : 0;

        $coords = [
            'l' => round($l / 100, $precision),
            'c' => round($c, $precision),
            'h' => round($h, $huePrecision),
        ];

        $lightness = $coords['l'] * 100 . '%';
        $chroma = (string) $coords['c'];
        $hue = (string) $coords['h'];
        $hue = $hue === '0' ? 'none' : $hue;

        $oklch = sprintf('oklch(%s %s %s)', $lightness, $chroma, $hue);
        $hex = $factory->toHexRgb()->stringify();

        return [
            'hex' => $hex,
            'oklch' => $oklch,
            'coords' => $coords,
            'customProperty' => [
                'coords' => sprintf('--%s-l:%s;--%s-c:%s;--%s-h:%s;', $customPropertyName, $coords['l'], $customPropertyName, $coords['c'], $customPropertyName, $coords['h']),
                'oklch' => sprintf('--%s:%s;', $customPropertyName, $oklch),
                'hex' => sprintf('--%s:%s;', $customPropertyName, $hex),
            ]
        ];
    }

    /**
     * All methods are considered safe
     *
     * @param string $methodName The name of the method
     * @return bool
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
