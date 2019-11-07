<?php

namespace Liro\Menus\Requests;

class MenuStoreRequest extends \Liro\System\Http\FormRequest
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
            'hide'          => 'required|integer',
            'title'         => 'required|min:1',
            'route'         => 'nullable|regex:/^[a-z0-9\-\_\/]+$/i',
            'module'        => 'required',
            'menu_type_id'  => 'required|integer|exists:menu_types,id',
            'query'         => 'nullable'
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
            'hide'          => trans('liro-menus::form.menu.hide'),
            'title'         => trans('liro-menus::form.menu.title'),
            'route'         => trans('liro-menus::form.menu.route'),
            'module'        => trans('liro-menus::form.menu.module'),
            'menu_type_id'  => trans('liro-menus::form.menu.type'),
            'query'         => trans('liro-menus::form.menu.query')
        ];
    }

}
