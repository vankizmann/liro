@layout(null)

@php
    asset()->script('liro-role', 'liro-users::dist/liro-role.js', ['theme-script']);
@endphp

@section('content')
    <liro-role-index></liro-role-index>
@endsection
