<?php

namespace Liro\Users\Requests;

class RoleUpdateRequest extends \Illuminate\Foundation\Http\FormRequest
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
            'title.required'    => 'liro-users.messages.title.required',
            'title.min'         => 'liro-users.messages.title.min'
        ];
    }

}
