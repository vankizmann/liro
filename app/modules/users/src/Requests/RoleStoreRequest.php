<?php

namespace Liro\Users\Requests;

class RoleStoreRequest extends \Illuminate\Foundation\Http\FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'         => 'required|min:4',
            'access'        => 'required|unique:user_roles|alpha|min:4',
            'route_names'   => 'array'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required'        => trans('*.liro-users.messages.title.required'),
            'title.min'             => trans('*.liro-users.messages.title.min'),
            'access.required'       => trans('*.liro-users.messages.access.required'),
            'access.unique'         => trans('*.liro-users.messages.access.unique'),
            'access.alpha'          => trans('*.liro-users.messages.access.alpha'),
            'access.min'            => trans('*.liro-users.messages.access.min'),
            'route_names.array'     => trans('*.liro-users.messages.route_names.array')
        ];
    }

}
