@extends('theme::index')

@php
    app('scripts')->data([
        'media' => $media->toArray()
    ]);

    app('scripts')->link('app-media', 'liro-media:resources/dist/app-media.js');
@endphp

@section('content')
    <app-media-index move-route="{{ route('liro-media.backend.media.move') }}" upload-route="{{ route('liro-media.backend.media.upload') }}"></app-media-index>
@endsection
