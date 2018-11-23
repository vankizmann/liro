<?php

namespace Liro\Users\Requests;

class UserStoreRequest extends \Liro\System\Http\FormRequest
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
            'name'          => 'required|min:4',
            'state'         => 'required|integer',
            'email'         => 'required|unique:users|email',
            'password'      => 'required|min:6'
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'state'         => trans('liro-users::form.user.state'),
            'name'          => trans('liro-users::form.user.name'),
            'email'         => trans('liro-users::form.user.email'),
            'password'      => trans('liro-users::form.user.password'),
        ];
    }

}
