<?php

namespace App\Models;

use OzdemirBurak\Iris\Color\Hsv;

class LifxLight extends Light
{
    public object $light;

    public function __construct(object $light)
    {
        $this->light = $light;
    }

    public function getName(): string
    {
        return $this->light->label;
    }

    public function getId(): string
    {
        return 'lifx_' . $this->light->id;
    }

    public function getBrightness(): int
    {
        return round($this->light->brightness * 100);
    }

    public function isOn(): bool
    {
        return $this->light->power === 'on';
    }

    public function isReachable(): bool
    {
        return $this->light->connected;
    }

    public function isColour(): bool
    {
        return $this->light->product->capabilities->has_color;
    }

    public function getRgbColourString(): string
    {
        $h = round($this->light->color->hue);
        $s = round($this->light->color->saturation * 100);
        $v = $this->isOn() ? $this->getBrightness() : 0;

        $hsv = new Hsv("$h, $s%, $v%");

        return implode(',', $hsv->toRgb()->values());
    }
    public function debug() {
        return $this->light;
    }
}
