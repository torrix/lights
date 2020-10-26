<?php

namespace App\Http\Controllers;

use App\Models\HueLight;
use App\Models\LifxLight;
use Illuminate\Http\Request;
use OzdemirBurak\Iris\Color\Hex;
use PHLAK\LIFX\Client as LifxClient;
use Phue\Client as HueClient;

class Light extends Controller
{
    public function toggle($id)
    {
        [$type, $id] = explode('_', $id);

        if ($type === 'hue') {
            $hue       = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $hueLights = $hue->getLights();

            $light = $hueLights[$id];

            $isOn = $light->isOn();

            $light->setOn(!$isOn);

            $light = new HueLight($light);

            return json_encode(['newColour' => $light->getRgbColourString()]);
        }

        if ($type === 'lifx') {
            $lifx = new LifxClient(env('LIFX_TOKEN'));

            $selector = 'id:' . $id;
            $lifx->togglePower($selector, 0);

            sleep(2);

            $light = $lifx->listLights($selector)[0];

            $light = new LifxLight($light);

            return json_encode(['newColour' => $light->getRgbColourString()]);
        }
    }

    public function detail($id)
    {
        [$type, $id] = explode('_', $id);

        if ($type === 'hue') {
            $client = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $lights = $client->getLights();

            $light = new HueLight($lights[$id]);
        }
        if ($type === 'lifx') {
            $client = new LifxClient(env('LIFX_TOKEN'));
            $light  = $client->listLights('id:' . $id);

            $light = new LifxLight($light[0]);
        }

        return view('detail', [
            'light' => $light,
            'id'    => implode('_', [$type, $id]),
        ]);
    }

    public function setColour(Request $request, $id)
    {
        [$type, $id] = explode('_', $id);

        $hex = new Hex($request->query('colour'));

        $rgb = $hex->toRgb();

        if ($type === 'hue') {
            $client = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $lights = $client->getLights();
            $lights[$id]->setRGB(...$rgb->values());
        }
        if ($type === 'lifx') {
            $client = new LifxClient(env('LIFX_TOKEN'));
            $client->setState('id:' . $id, [
                'color' => 'rgb:' . implode(',', $rgb->values()),
            ]);
        }
    }

    public function on($id)
    {
        [$type, $id] = explode('_', $id);

        if ($type === 'hue') {
            $client = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $lights = $client->getLights();
            $lights[$id]->setOn(true);
        }
        if ($type === 'lifx') {
            $client = new LifxClient(env('LIFX_TOKEN'));
            $client->setState('id:' . $id, [
                'power' => 'on',
            ]);
        }
    }

    public function off($id)
    {
        [$type, $id] = explode('_', $id);

        if ($type === 'hue') {
            $client = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $lights = $client->getLights();
            $lights[$id]->setOn(false);
        }
        if ($type === 'lifx') {
            $client = new LifxClient(env('LIFX_TOKEN'));
            $client->setState('id:' . $id, [
                'power' => 'off',
            ]);
        }
    }

    public function setBrightness(Request $request, $id)
    {
        [$type, $id] = explode('_', $id);

        $brightness = $request->query('brightness');

        if ($type === 'hue') {
            $client = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
            $lights = $client->getLights();
            $lights[$id]->setBrightness(round($brightness / 100 * 255));
        }
        if ($type === 'lifx') {
            $client = new LifxClient(env('LIFX_TOKEN'));
            $client->setState('id:' . $id, [
                'brightness' => $brightness / 100,
            ]);
        }
    }

    public function status()
    {
        $hueClient = new HueClient(env('HUE_BRIDGE_IP'), env('HUE_USER'));
        $hueLights = $hueClient->getLights();

        foreach ($hueLights as $light) {
            $light = new HueLight($light);

            $id = $light->getId();

            $lights[$id] = [
                'reachable'  => $light->isReachable(),
                'isOn'       => $light->isOn(),
                'brightness' => $light->getBrightness(),
                'colour'     => $light->getRgbColourString(),
            ];
        }

        $lifxClient = new LifxClient(env('LIFX_TOKEN'));
        $lifxLights = $lifxClient->listLights();

        foreach ($lifxLights as $light) {
            $light = new LifxLight($light);
            $id    = $light->getId();

            $lights[$id] = [
                'reachable'  => $light->isReachable(),
                'isOn'       => $light->isOn(),
                'brightness' => $light->getBrightness(),
                'colour'     => $light->getRgbColourString(),
            ];
        }

        return response()->json($lights ?? []);
    }
}
