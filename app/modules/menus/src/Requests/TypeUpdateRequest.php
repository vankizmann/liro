<?php

namespace Liro\Menus\Requests;

class TypeUpdateRequest extends \Illuminate\Foundation\Http\FormRequest
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
            'route'         => 'nullable|alpha_dash',
            'theme'         => 'required|alpha_dash'
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
            'route.alpha_dash'      => trans('liro-menus.messages.route.alpha_dash'),
            'theme.required'        => trans('liro-menus.messages.theme.required'),
            'theme.alpha'           => trans('liro-menus.messages.theme.alpha_dash')
        ];
    }

}
