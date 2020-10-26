@extends('layouts.app')

@section('content')
    <div class="uk-section uk-section-xsmall">
        <div class="uk-container uk-container-small" x-data="dashboard()" @new-status.window="updateStatus()">
            @foreach($lights['groups'] as $group => $groupContents)
                <h2 class="uk-margin-small uk-text-center">
                    @if (isset($groupContents['groups']))
                        <a href="/?path={{ $path }}.{{ $group }}">
                            {{ $groupContents['name'] }}
                        </a>
                    @else
                        {{ $groupContents['name'] }}
                    @endif
                </h2>
                <div x-show="! loaded" class="uk-text-center">
                    <div data-uk-spinner></div>
                </div>
                <div class="uk-grid uk-grid-small" data-uk-grid x-show="loaded">
                    @if (isset($groupContents['groups']))
                        @foreach($groupContents['groups'] as $subGroup => $subGroupContents)
                            <div class="uk-width-1-2 uk-width-1-4@m uk-margin-bottom">
                                <div x-data="group('{{ $path }}.{{ $group }}.{{ $subGroup }}')">
                                    <a @click="toggle" href="#"
                                       class="uk-button uk-button-large uk-border-pill uk-width-1-1 uk-button-default">
                                        {{ $subGroupContents['name'] }}
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    @endif
                    @if (isset($groupContents['lights']))
                        @foreach($groupContents['lights'] as $light)
                            <div class="uk-width-1-2 uk-width-1-4@m uk-margin-bottom">
                                <div>
                                    <button class="uk-button uk-button-large uk-border-pill uk-width-1-1"
                                        :style="'background-color: rgb(' + lightStatus.{{ $light['make'] }}_{{ $light['id'] }}.colour + ')'">
                                        <span x-data="light('{{$light['light']->getId()}}')" data-long-press-delay="300"
                                              @long-press="details('{{$light['light']->getId()}}')"
                                              @click="toggle">
                                            {{ $light['name'] }}<span x-show="wait">...</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            @endforeach
        </div>
    </div>
    <div id="details" class="uk-modal-full uk-background-secondary uk-light" data-uk-modal>
        <div class="uk-modal-dialog uk-background-secondary uk-height-viewport">
            <button class="uk-modal-close-full uk-close-large uk-background-secondary uk-light" type="button"
                    data-uk-close></button>
            <iframe id="detailframe" src="" class="uk-height-viewport"></iframe>
        </div>
    </div>
@endsection
