@extends('theme::index')

@php
    app('assets')->script('liro-folder', 'liro-media::dist/liro-folder.js', ['theme-script']);
@endphp

@section('content')
    <liro-folder-index></liro-folder-index>
@endsection
