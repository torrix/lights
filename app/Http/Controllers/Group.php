<?php

namespace App\Http\Controllers;

use App\Models\HueLight;
use App\Models\LifxLight;
use PHLAK\LIFX\Client as LifxClient;
use Phue\Client as HueClient;

class Group extends Controller
{
    private array $hueLights;
    private array $lifxLights;
    private array $lights;

    public function toggle($id)
    {
        $paths = ['lights'];

        $newPaths = array_filter(explode('.', $id));
        foreach ($newPaths as $newPath) {
            $paths[] = $newPath;
        }

        $lights = config(implode('.groups.', $paths), []);

        $hue             = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
        $this->hueLights = $hue->getLights();

        $lifx             = new LifxClient(env('LIFX_TOKEN'));
        $this->lifxLights = $lifx->listLights();

        $this->findLights($lights);

        foreach ($this->lights as $light) {
            $light->light->setOn(! $light->isOn());
        }
    }

    private function findLights($lights)
    {
        if (isset($lights['groups'])) {
            foreach ($lights['groups'] as &$group) {
                $group = $this->findLights($group);
            }
            unset($group);
        }

        if (isset($lights['lights'])) {
            $lights['lights'] = array_filter($lights['lights'], static function ($light) {
                return $light['id'] !== '';
            });

            foreach ($lights['lights'] as &$light) {
                if ($light['make'] === 'hue') {
                    $this->lights[]  = new HueLight($this->hueLights[$light['id']]);
                }
                if ($light['make'] === 'lifx') {
                    $lifxLights = array_filter($this->lifxLights, static function ($thisLight) use ($light) {
                        return $thisLight->id === $light['id'];
                    });

                    $this->lights[] = new LifxLight(array_pop($lifxLights));
                }
            }
        }

        return $lights;
    }
}
