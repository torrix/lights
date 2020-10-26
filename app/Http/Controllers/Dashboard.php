<?php

namespace App\Http\Controllers;

use App\Models\HueLight;
use App\Models\LifxLight;
use Illuminate\Http\Request;
use Phue\Client as HueClient;
use PHLAK\LIFX\Client as LifxClient;

class Dashboard extends Controller
{
    private array $hueLights;
    private array $lifxLights;

    public function index(Request $request)
    {
        $paths = ['lights'];

        if ($request->query('path')) {
            $newPaths = array_filter(explode('.', $request->query('path')));
            foreach ($newPaths as $newPath) {
                $paths[] = $newPath;
            }
        }

        $lights = config(implode('.groups.', $paths), []);

        $hue             = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
        $this->hueLights = $hue->getLights();

        $lifx             = new LifxClient(env('LIFX_TOKEN'));
        $this->lifxLights = $lifx->listLights();

        $lights = $this->attachLights($lights);

        // dd($lights);

        array_shift($paths);

        return view('dashboard', [
            'lights' => $lights,
            'path'   => implode('.', $paths),
        ]);
    }

    private function attachLights($lights)
    {
        if (isset($lights['groups'])) {
            foreach ($lights['groups'] as &$group) {
                $group = $this->attachLights($group);
            }
            unset($group);
        }

        if (isset($lights['lights'])) {
            $lights['lights'] = array_filter($lights['lights'], static function ($light) {
                return $light['id'] !== '';
            });

            foreach ($lights['lights'] as &$light) {
                if ($light['make'] === 'hue') {
                    $light['light'] = new HueLight($this->hueLights[$light['id']]);
                }
                if ($light['make'] === 'lifx') {
                    $lifxLights = array_filter($this->lifxLights, static function ($thisLight) use ($light) {
                        return $thisLight->id === $light['id'];
                    });

                    $light['light'] = new LifxLight(array_pop($lifxLights));
                }
            }
        }

        return $lights;
    }
}
