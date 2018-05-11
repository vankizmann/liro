@extends('theme::login')

@php
    app('scripts')->link('app-auth', 'liro-users:resources/dist/app-auth.js');
@endphp

@section('content')
    <div class="liro-users">
        <app-login action="{{ route('liro-users.backend.auth.login') }}">@csrf</app-login>
    </div>
@endsection
