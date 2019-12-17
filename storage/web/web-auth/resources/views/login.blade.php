@extends( web()->getLayout() )

@section('content')
    {!! Form::open(['url' => url()->current()]) !!}

        {!! Form::token() !!}

        <div class="form-group">
            {!! Form::label('email', 'E-Mail-Address') !!}
            {!! Form::email('email', null, ['placeholder' => trans('Please enter your email'), 'class' => 'form-control']) !!}
            @if ($errors->has('email'))
                <span class="text-danger">{{ $errors->first('email') }}</span>
            @endif
        </div>


        <div class="form-group">
            {!! Form::label('password', 'Password') !!}
            {!! Form::password('password', ['placeholder' => trans('Please enter your password'), 'class' => 'form-control']) !!}
            @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
            @endif
        </div>

        <div class="form-group">
            {!! Form::submit(trans('Sign in'), ['class' => 'btn btn-primary']) !!}
        </div>

    {!! Form::close() !!}
@endsection
