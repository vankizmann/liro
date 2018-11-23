<?php

namespace Liro\System\Http;

class FormRequest extends \Illuminate\Foundation\Http\FormRequest
{

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'required'          => trans('theme::validation.required'),
            'integer'           => trans('theme::validation.integer'),
            'unique'            => trans('theme::validation.unique'),
            'email'             => trans('theme::validation.email'),
            'min'               => trans('theme::validation.min'),
            'alpha'             => trans('theme::validation.alpha'),
            'exists'            => trans('theme::validation.exists'),
            'regex'             => trans('theme::validation.regex'),
            'alpha_dash'        => trans('theme::validation.alpha_dash')
        ];
    }

}
