@extends('theme::index')

@php
    app('scripts')->addLink('liro-language', 'liro-languages::dist/liro-language.js', ['theme-script']);
@endphp

@section('content')
    <liro-language-index></liro-language-index>
@endsection
