<?php

namespace Liro\Menus\Requests;

use Liro\Menus\Rules\RouteRule;

class MenuOrderRequest extends \Liro\System\Http\FormRequest
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
            'menus' => [new RouteRule]
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
            'route' => trans('liro-menus::form.menu.route')
        ];
    }

}
