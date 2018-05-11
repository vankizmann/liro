@extends('theme::index')

@php
    app('scripts')->link('app-types', 'liro-menus:resources/dist/app-types.js');
@endphp

@section('content')
<div class="liro-types-index">

    <!-- Component start -->
    <app-types-index
        create-route="{{ route('liro-menus.backend.types.create') }}" 
        :types="{{ $types->toJson() }}" :themes="{{ $themes->toJson() }}"
    ></app-types-index>
    <!-- Compenent end -->

</div>
@endsection
