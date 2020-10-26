<?php

namespace App\Models;

use Phue\Light as PhueLight;

class HueLight extends Light
{
    public PhueLight $light;

    public function __construct(PhueLight $light)
    {
        $this->light = $light;
    }

    public function getName(): string
    {
        return $this->light->getName();
    }

    public function getId(): string
    {
        return 'hue_' . $this->light->getId();
    }

    public function getBrightness(): int
    {
        return $this->light->getBrightness();
    }

    public function getRgbColourString(): string
    {
        return $this->getRgbColourStringFromArray($this->getColour());
    }

    private function getColour(): array
    {
        if (!$this->light->isReachable()) {
            return [0, 0, 0];
        }
        if (!$this->light->isOn()) {
            return [0, 0, 0];
        }
        if ($this->light->getType() === 'Extended color light') {
            [$r, $g, $b] = array_values($this->light->getRGB());

            $r = (int)round($r);
            $g = (int)round($g);
            $b = (int)round($b);

            return [$r, $g, $b];
        }

        $w = (int)round($this->light->getBrightness());

        return [$w, $w, $w];
    }

    public function debug(): void
    {
        echo '<hr>' . PHP_EOL;
        echo 'getColour: ' . implode(', ', $this->getColour()) . '<br>' . PHP_EOL;
        echo 'getId: ' . $this->light->getId() . '<br>' . PHP_EOL;
        echo 'getName: ' . $this->light->getName() . '<br>' . PHP_EOL;
        echo 'getType: ' . $this->light->getType() . '<br>' . PHP_EOL;
        echo 'getModelId: ' . $this->light->getModelId() . '<br>' . PHP_EOL;
        echo 'isReachable: ' . $this->light->isReachable() . '<br>' . PHP_EOL;
        if (!$this->light->isReachable()) {
            return;
        }
        echo 'getBrightness: ' . $this->light->getBrightness() . '<br>' . PHP_EOL;
        echo 'isOn: ' . $this->light->isOn() . '<br>' . PHP_EOL;

        if ($this->light->getType() === 'Extended color light') {
            echo 'getHue: ' . $this->light->getHue() . '<br>' . PHP_EOL;
            echo 'getSaturation: ' . $this->light->getSaturation() . '<br>' . PHP_EOL;
            echo 'getXY[x]: ' . $this->light->getXY()['x'] . '<br>' . PHP_EOL;
            echo 'getXY[y]: ' . $this->light->getXY()['y'] . '<br>' . PHP_EOL;
            echo 'getRGB[r]: ' . $this->light->getRGB()['red'] . '<br>' . PHP_EOL;
            echo 'getRGB[g]: ' . $this->light->getRGB()['green'] . '<br>' . PHP_EOL;
            echo 'getRGB[b]: ' . $this->light->getRGB()['blue'] . '<br>' . PHP_EOL;
            echo 'getColorTemp: ' . $this->light->getColorTemp() . '<br>' . PHP_EOL;
            echo 'getColorMode: ' . $this->light->getColorMode() . '<br>' . PHP_EOL;
        }
    }

    public function isColour(): bool
    {
        return $this->light->getType() === 'Extended color light';
    }

    public function isReachable(): bool
    {
        return $this->light->isReachable();
    }

    public function isOn(): bool
    {
        return $this->light->isOn();
    }
}
