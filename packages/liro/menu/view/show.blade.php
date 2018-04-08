@extends('theme::index')

@section('content')
    <table class="table">
        <thead>
            <tr>
                <th>id</th>
                <th>state</th>
                <th>default</th>
                <th>name</th>
                <th>locale</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $menu->id }}</td>
                <td>{{ $menu->state }}</td>
                <td>{{ $menu->default }}</td>
                <td>{{ $menu->name }}</td>
                <td>{{ $menu->locale }}</td>
            </tr>
        </tbody>
    </table>
@endsection
