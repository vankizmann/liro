@theme('error')

@section('content')
    Sorry, the request requires user authentication.<br><a href="{{ url(Web::getLoginAttr('route', '/')) }}">Go to Login</a>
@endsection
