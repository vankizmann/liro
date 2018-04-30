@extends('backend::index')

@php
    app('scripts')->link('jquery-ui', '//code.jquery.com/ui/1.10.4/jquery-ui.min.js');
    app('scripts')->link('jquery-nestedset', 'liro.menus:resources/dist/jquery-nestedset.js');
    app('scripts')->link('app-menu-index-item', 'liro.menus:resources/dist/app-menu-index-item.js');
    app('scripts')->link('app-menu-index', 'liro.menus:resources/dist/app-menu-index.js');
@endphp

@section('content')
<div class="liro-menus">
    <app-menu-index create-route="{{ route('backend.menus.create') }}" :value="{{ $menus->toTree()->toJson() }}"></app-menu-index>
</div>
@endsection
