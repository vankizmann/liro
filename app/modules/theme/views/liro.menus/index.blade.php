@extends('backend::index')

@section('content')
<div class="liro-menus">
    <ol>
        @foreach($menus as $menu)
            <li>{{ $menu->title }}</li>
        @endforeach
    </ol>
</div>
@endsection
