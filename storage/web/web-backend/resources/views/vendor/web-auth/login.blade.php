@extends( web()->getLayout() )

@section('content')
    {!! Form::open(['url' => url()->current(), 'class' => 'n-form n-form--vertical']) !!}

    <div class="n-form-item">

        <div class="n-form-item__label">
            {!! Form::label('email', 'E-Mail-Address') !!}
        </div>

        <div class="n-form-item__input">
            <div class="n-input__wrapper">
                {!! Form::email('email', null, ['class' => 'n-input n-input--default']) !!}
            </div>
        </div>

        @if ($errors->has('email'))
            <div class="n-form-item__error">
                {{ $errors->first('email') }}
            </div>
        @endif

    </div>


    <div class="n-form-item">

        <div class="n-form-item__label">
            {!! Form::label('password', 'Password') !!}
        </div>

        <div class="n-form-item__input">
            <div class="n-input__wrapper">
                {!! Form::password('password', ['class' => 'n-input n-input--default']) !!}
            </div>
        </div>

        @if ($errors->has('password'))
            <div class="n-form-item__error">
                {{ $errors->first('password') }}
            </div>
        @endif

    </div>

    <div class="n-form-item" style="margin-top: 24px;">
        <div class="n-button__wrapper">
            {!! Form::submit(trans('Sign in'), ['class' => 'n-button n-button--primary n-button--default']) !!}
        </div>
    </div>

    {!! Form::close() !!}
@endsection
