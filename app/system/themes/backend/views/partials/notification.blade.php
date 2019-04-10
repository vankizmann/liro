@if ( session()->has('error') && $error = session('error') )
    <script>UIkit.notification('{{ trans($error) }}', 'danger');</script>
@endif

@if ( request()->has('error') && $error = request('error') )
    <script>UIkit.notification('{{ trans($error) }}', 'danger');</script>
@endif

@if ( session()->has('warning') && $warning = session('warning') )
    <script>UIkit.notification('{{ trans($warning) }}', 'warning');</script>
@endif

@if ( request()->has('warning') && $warning = request('warning') )
    <script>UIkit.notification('{{ trans($warning) }}', 'warning');</script>
@endif

@if ( session()->has('success') && $success = session('success') )
    <script>UIkit.notification('{{ trans($success) }}', 'success');</script>
@endif

@if ( request()->has('success') && $success = request('success') )
    <script>UIkit.notification('{{ trans($success) }}', 'success');</script>
@endif

@if ( session()->has('message') && $message = session('message') )
    <script>UIkit.notification('{{ trans($message) }}', 'message');</script>
@endif

@if ( request()->has('message') && $message = request('message') )
    <script>UIkit.notification('{{ trans($message) }}', 'message');</script>
@endif
