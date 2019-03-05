<?php

namespace Liro\Extension\Users\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'state'             => 'required|integer',
            'name'              => 'required|min:4',
            'email'             => "required|unique:users,email,$this->id|email",
            'password'          => 'nullable|min:6',
            'password_confirm'  => 'required_with:password|min:6|same:password'
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
            'state'             => trans('liro-users::form.user.state'),
            'name'              => trans('liro-users::form.user.name'),
            'email'             => trans('liro-users::form.user.email'),
            'password'          => trans('liro-users::form.user.password'),
            'password_confirm'  => trans('liro-users::form.user.password_confirm')
        ];
    }

}
