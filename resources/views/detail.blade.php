@extends('layouts.app')

@section('content')
    <div class="uk-section uk-section-xsmall">
        <div class="uk-container uk-container-small" x-data="details('{{ $id }}')">
            <h2>{{$light->getName()}}</h2>

            @if ($light->isColour())
                @php
                    $colours = [
                        ['22292f', '3d4852', '606f7b', '8795a1', 'b8c2cc', 'dae1e7', 'ffffff'],
                        ['3b0d0c', '621b18', 'cc1f1a', 'e3342f', 'ef5753', 'f9acaa', 'fcebea'],
                        ['462a16', '613b1f', 'de751f', 'f6993f', 'faad63', 'fcd9b6', 'fff5eb'],
                        ['453411', '684f1d', 'f2d024', 'ffed4a', 'fff382', 'fff9c2', 'fcfbeb'],
                        ['0f2f21', '1a4731', '1f9d55', '38c172', '51d88a', 'a2f5bf', 'e3fcec'],
                        ['0d3331', '20504f', '38a89d', '4dc0b5', '64d5ca', 'a0f0ed', 'e8fffe'],
                        ['12283a', '1c3d5a', '2779bd', '3490dc', '6cb2eb', 'bcdefa', 'eff8ff'],
                        ['191e38', '2f365f', '5661b3', '6574cd', '7886d7', 'b2b7ff', 'e6e8ff'],
                        ['21183c', '382b5f', '794acf', '9561e2', 'a779e9', 'd6bbfc', 'f3ebff'],
                        ['451225', '6f213f', 'eb5286', 'f66d9b', 'fa7ea8', 'ffbbca', 'ffebef'],
                    ];
                @endphp

                @foreach($colours as $colour)
                    <div class="uk-grid uk-margin-remove" data-uk-grid>
                        @foreach($colour as $shade)
                            <div class="colour uk-width-expand"
                                 @click="setColour('{{ $shade }}')"
                                 style="background-color: #{{ $shade }}">
                                &nbsp;
                            </div>
                        @endforeach
                    </div>
                @endforeach
            @endif

            <div class="uk-margin-medium uk-grid" data-uk-grid>
                <div class="uk-width-auto">
                    <span x-text="brightness"></span>%
                </div>
                <div class="uk-width-expand">
                    <input type="range" min="1" max="100" class="uk-range" x-model="brightness" @change="setBrightness">
                </div>
            </div>

            <div class="uk-margin uk-grid" data-uk-grid>
                <div class="uk-width-1-2">
                    <button class="uk-button uk-button-default uk-button-large uk-border-pill uk-width-1-1"
                            @click="off">
                        Off
                    </button>
                </div>
                <div class="uk-width-1-2">
                    <button class="uk-button uk-button-default uk-button-large uk-border-pill uk-width-1-1"
                            @click="on">
                        On
                    </button>
                </div>
            </div>

            <div class="uk-margin">
                <button class="uk-button uk-button-danger uk-button-large uk-border-pill uk-width-1-1">
                    Alert
                </button>
            </div>
        </div>
    </div>
@endsection
