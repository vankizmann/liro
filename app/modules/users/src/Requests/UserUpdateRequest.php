<?php

namespace Liro\Users\Requests;

class UserUpdateRequest extends \Illuminate\Foundation\Http\FormRequest
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
            'email'         => "required|unique:users,email,$this->id|email",
            'password'      => 'nullable|min:6',
            'role_ids'      => 'array'
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
            'state.required'        => trans('*.liro-users.messages.state.required'),
            'state.integer'         => trans('*.liro-users.messages.state.integer'),
            'name.required'         => trans('*.liro-users.messages.name.required'),
            'name.min'              => trans('*.liro-users.messages.name.min'),
            'email.required'        => trans('*.liro-users.messages.email.required'),
            'email.unique'          => trans('*.liro-users.messages.email.unique'),
            'email.email'           => trans('*.liro-users.messages.email.email'),
            'password.min'          => trans('*.liro-users.messages.password.min'),
            'role_ids.array'        => trans('*.liro-users.messages.role_ids.array')
        ];
    }

}
