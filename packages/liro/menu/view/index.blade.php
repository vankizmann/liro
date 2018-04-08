@extends('theme::index')

@push('scripts')
    <script>
        liro.data.menus = collect({!! $menus !!});
    </script>
@endpush

@section('content')

    <table class="table">
        <thead>
            <tr>
                <th>@lang('table.id')</th>
                <th>@lang('table.state')</th>
                <th>@lang('table.lang')</th>
                <th>@lang('table.name')</th>
                <th>@lang('table.alias')</th>
                <th>@lang('table.route')</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($menus as $menu)
                <tr>
                    <td>{{ $menu->id }}</td>
                    <td>{{ $menu->state }}</td>
                    <td>{{ $menu->lang }}</td>
                    <td>{{ $menu->name }}</td>
                    <td>{{ $menu->alias }}</td>
                    <td>{{ $menu->route }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
