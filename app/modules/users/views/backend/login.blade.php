@extends('backend::login')

@php
    app('scripts')->link('app-login', 'liro.users:resources/dist/app-login.js');
@endphp

@section('content')
    <div class="liro-users">
        <app-login action="{{ route('liro.users.backend.auth.login') }}">@csrf</app-login>
    </div>
@endsection
