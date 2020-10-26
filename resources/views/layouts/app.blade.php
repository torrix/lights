<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="uk-background-secondary uk-light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href='https://fonts.googleapis.com/css?family=Russo+One' rel='stylesheet'>
    <link href="/css/app.css" rel="stylesheet">
</head>
<body>
<div id="app">
    <div class="uk-background-primary">
        <nav class="uk-navbar-container uk-navbar-transparent">
            <div class="uk-container uk-container-small">
                <div class="uk-navbar" data-uk-navbar>
                    <div class="uk-navbar-left">
                        <a class="uk-navbar-item uk-logo" href="/">{{ config('app.name', 'Laravel') }}</a>
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav">
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <main data-uk-height-viewport="expand: true">
        @yield('content')
    </main>

    <footer class="uk-section uk-section-xsmall uk-section-secondary uk-text-center">
        <a target="_blank" href="https://torrix.uk/">&copy; 2020 Torrix</a>
    </footer>
</div>
<script src="/js/long-press-event.min.js"></script>
<script src="/js/app.js" defer></script>
</body>
</html>
