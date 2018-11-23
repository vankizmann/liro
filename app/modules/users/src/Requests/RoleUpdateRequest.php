<?php

namespace Liro\Users\Requests;

class RoleUpdateRequest extends \Liro\System\Http\FormRequest
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
            'access'        => "required|unique:user_roles,access,$this->id|alpha|min:4"
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
            'title'         => trans('liro-users::form.role.title'),
            'access'        => trans('liro-users::form.role.access')
        ];
    }

}
