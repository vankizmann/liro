@extends('backend::index')

@section('content')
<div class="liro-menus">
    <ul>
        @foreach($menus as $menu)
            <li>{{ $menu->title }}</li>
        @endforeach
    </ul>
</div>
@endsection
