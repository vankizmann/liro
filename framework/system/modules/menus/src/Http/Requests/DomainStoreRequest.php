<?php

namespace Liro\Menus\Requests;

class DomainStoreRequest extends \Liro\System\Http\FormRequest
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
            'route'         => 'nullable|regex:/^[a-z0-9\-\_\/]+$/i',
            'theme'         => 'required|alpha_dash'
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
            'state'         => trans('liro-menus::form.menu.state'),
            'title'         => trans('liro-menus::form.menu.title'),
            'route'         => trans('liro-menus::form.menu.route'),
            'theme'         => trans('liro-menus::form.menu.theme')
        ];
    }

}
