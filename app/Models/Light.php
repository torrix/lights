<?php

namespace App\Models;

class Light
{
    public function getRgbColourStringFromArray($rgb): string
    {
        [$r, $g, $b] = array_values($rgb);

        if ($r === $g && $g === $b) {
            if ($r === 0) {
                return '0,0,0';
            }

            $r = floor((($r / 255 * 50) + 50) / 100 * 255);

            return "{$r},{$r},{$r}";
        }

        return "{$r},{$g},{$b}";
    }
}
