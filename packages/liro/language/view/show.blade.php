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
                <td>{{ $language->id }}</td>
                <td>{{ $language->state }}</td>
                <td>{{ $language->default }}</td>
                <td>{{ $language->name }}</td>
                <td>{{ $language->locale }}</td>
            </tr>
        </tbody>
    </table>
@endsection
