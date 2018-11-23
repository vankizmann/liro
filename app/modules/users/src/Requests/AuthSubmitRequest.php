<?php

namespace Liro\Users\Requests;

class AuthSubmitRequest extends \Liro\System\Http\FormRequest
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
            'email'         => 'required|email',
            'password'      => 'required'
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
            'email'         => trans('liro-users::form.auth.email'),
            'password'      => trans('liro-users::form.auth.password')
        ];
    }

}
