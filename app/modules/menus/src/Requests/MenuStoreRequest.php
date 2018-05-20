<?php

namespace Liro\Menus\Requests;

class MenuStoreRequest extends \Illuminate\Foundation\Http\FormRequest
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
            'title'         => 'required|min:1',
            'state'         => 'required|integer',
            'hidden'        => 'required|integer',
            'route'         => 'nullable|alpha_dash',
            'package'       => 'required',
            'menu_type_id'  => 'required|integer',
            'query'         => 'nullable'
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
            'title.required'        => trans('liro-menus.messages.title.required'),
            'title.min'             => trans('liro-menus.messages.title.min'),
        ];
    }

}
