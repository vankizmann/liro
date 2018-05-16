@extends('theme::index')

@php
    app('scripts')->link('app-menus', 'liro-menus:resources/dist/app-menus.js');
@endphp

@section('content')
<div class="liro-menus-index">

    <!-- Component start -->
    <app-menus-index
        create-route="{{ route('liro-menus.backend.menus.create') }}" order-route="{{ route('liro-menus.backend.menus.order') }}" 
        :menus="{{ $menus->toTree()->toJson() }}" :types="{{ $types->toJson() }}"
    ></app-menus-index>
    <!-- Compenent end -->

</div>
@endsection
