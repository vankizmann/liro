@extends('theme::index')

@php
    app('scripts')->link('jquery-ui', '//code.jquery.com/ui/1.10.4/jquery-ui.min.js');
    app('scripts')->link('jquery-nestedset', 'liro-menus:resources/dist/jquery-nestedset.js');
    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
<div class="liro-menus">
    <app-menu-index
        create-route="{{ route('liro-menus.backend.menus.create') }}" 
        order-route="{{ route('liro-menus.backend.menus.order') }}" 
        :value="{{ $menus->toTree()->toJson() }}"
    ></app-menu-index>
</div>
@endsection
