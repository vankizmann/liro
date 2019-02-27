@extends('theme::error')

@section('title', 'Forbidden')

@section('message')
Sorry, the request requires user authentication.<br><a href="{{ route('liro-users.admin.auth.login') }}">Go to Login</a>
@endsection