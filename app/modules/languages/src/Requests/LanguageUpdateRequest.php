<?php

namespace Liro\Languages\Requests;

class LanguageUpdateRequest extends \Liro\System\Http\FormRequest
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
            'state'         => 'required|integer',
            'title'         => 'required|min:4',
            'locale'        => "required|unique:languages,locale,$this->id"
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
            'state'         => trans('liro-languages::form.language.state'),
            'title'         => trans('liro-languages::form.language.title'),
            'locale'        => trans('liro-languages::form.language.locale')
        ];
    }

}
