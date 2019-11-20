@web(null)

@section('content')
<div>
    {{ trans('web-page::text.test') }}
    @dump(url($menu->route))
</div>
@endsection
