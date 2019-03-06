@extends('theme::index')

@php
    app('assets')->script('liro-language', 'liro-languages::dist/liro-language.js', ['theme-script']);
@endphp

@section('content')
    <liro-language-edit></liro-language-edit>
@endsection
