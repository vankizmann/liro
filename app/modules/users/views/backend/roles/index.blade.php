@extends('backend::index')

@php
    app('scripts')->link('app-roles', 'liro.users:resources/dist/app-roles.js');
@endphp

@section('content')
<div class="liro-roles-index">

    <!-- Component start -->
    <app-roles-index
        create-route="{{ route('liro.users.backend.roles.create') }}" 
        :roles="{{ $roles->toJson() }}" :users="{{ $users->toJson() }}" :routes="{{ $routes->toJson() }}"
    ></app-roles-index>
    <!-- Compenent end -->

</div>
@endsection
