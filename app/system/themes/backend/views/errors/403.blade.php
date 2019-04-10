@theme('error')

@section('content')
    Sorry, the request requires user authentication.<br><a href="{{ url(app('cms')->getLoginAttr('route') ?: '/') }}">Go to Login</a>
@endsection
