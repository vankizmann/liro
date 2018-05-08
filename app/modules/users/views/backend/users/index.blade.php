@extends('backend::index')

@php
    app('scripts')->link('app-users', 'liro.users:resources/dist/app-users.js');
@endphp

@section('content')
<div class="liro-users-index">

    <!-- Component start -->
    <app-users-index
        create-route="{{ route('liro.users.backend.users.create') }}" 
        :roles="{{ $roles->toJson() }}" :users="{{ $users->toJson() }}"
    ></app-users-index>
    <!-- Compenent end -->

</div>
@endsection
