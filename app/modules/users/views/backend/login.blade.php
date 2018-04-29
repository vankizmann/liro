@extends('backend::login')

@php
    app('scripts')->link('app-login', 'liro.users:resources/dist/app-login.js');
@endphp

@section('content')
    <div class="liro-users">
        <app-login action="{{ route('backend.users.login') }}">@csrf</app-login>
    </div>
@endsection
