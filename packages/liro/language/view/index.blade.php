@extends('theme::index')

@section('content')
    <table class="table">
        <thead>
            <tr>
                <th>@lang('table.id')</th>
                <th>@lang('table.state')</th>
                <th>@lang('table.default')</th>
                <th>@lang('table.name')</th>
                <th>@lang('table.lang')</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($languages as $language)
                <tr>
                    <td>{{ $language->id }}</td>
                    <td>{{ $language->state }}</td>
                    <td>{{ $language->default }}</td>
                    <td>{{ $language->name }}</td>
                    <td>{{ $language->locale }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
