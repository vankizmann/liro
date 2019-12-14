@extends(web()->getLayout())

@section('content')
    <form method="POST" action="{{ url()->current() }}">
        @csrf

        <div class="form-group">
            <label for="email">{{ trans('E-Mail-Address') }}</label>
            <input id="email" type="text" value="{{ old('email') }}" placeholder="{{ trans('Please enter your email') }}" class="form-control">
        </div>

        <div class="form-group">
            <label for="email">{{ trans('Password') }}</label>
            <input id="password" type="password" value="{{ old('password') }}" placeholder="{{ trans('Please enter your password') }}" class="form-control">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">{{ trans('Sign in') }}</button>
        </div>

    </form>
@endsection
