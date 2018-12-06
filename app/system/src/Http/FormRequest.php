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
            'accepted'                  => trans('theme::validation.accepted'),
            'active_url'                => trans('theme::validation.active_url'),
            'after'                     => trans('theme::validation.after'),
            'finish_date'               => trans('theme::validation.finish_date'),
            'alpha'                     => trans('theme::validation.alpha'),
            'alpha_dash'                => trans('theme::validation.alpha_dash'),
            'alpha_num'                 => trans('theme::validation.alpha_num'),
            'array'                     => trans('theme::validation.array'),
            'bail'                      => trans('theme::validation.bail'),
            'before'                    => trans('theme::validation.before'),
            'before_or_equal'           => trans('theme::validation.before_or_equal'),
            'between'                   => trans('theme::validation.between'),
            'boolean'                   => trans('theme::validation.boolean'),
            'confirmed'                 => trans('theme::validation.confirmed'),
            'date'                      => trans('theme::validation.date'),
            'date_equals'               => trans('theme::validation.date_equals'),
            'date_format'               => trans('theme::validation.date_format'),
            'digits'                    => trans('theme::validation.digits'),
            'digits_between'            => trans('theme::validation.digits_between'),
            'dimensions'                => trans('theme::validation.dimensions'),
            'distinct'                  => trans('theme::validation.distinct'),
            'email'                     => trans('theme::validation.email'),
            'exists'                    => trans('theme::validation.exists'),
            'file'                      => trans('theme::validation.file'),
            'filled'                    => trans('theme::validation.filled'),
            'gt'                        => trans('theme::validation.gt'),
            'gte'                       => trans('theme::validation.gte'),
            'image'                     => trans('theme::validation.image'),
            'in'                        => trans('theme::validation.in'),
            'in_array'                  => trans('theme::validation.in_array'),
            'integer'                   => trans('theme::validation.integer'),
            'ip'                        => trans('theme::validation.ip'),
            'ipv4'                      => trans('theme::validation.ipv4'),
            'ipv6'                      => trans('theme::validation.ipv6'),
            'json'                      => trans('theme::validation.json'),
            'lt'                        => trans('theme::validation.lt'),
            'lte'                       => trans('theme::validation.lte'),
            'max'                       => trans('theme::validation.max'),
            'mimetypes'                 => trans('theme::validation.required'),
            'mimes'                     => trans('theme::validation.mimes'),
            'min'                       => trans('theme::validation.min'),
            'not_in'                    => trans('theme::validation.not_in'),
            'not_regex'                 => trans('theme::validation.not_regex'),
            'nullable'                  => trans('theme::validation.nullable'),
            'numeric'                   => trans('theme::validation.numeric'),
            'regex'                     => trans('theme::validation.regex'),
            'required'                  => trans('theme::validation.required'),
            'required_if'               => trans('theme::validation.required_if'),
            'required_with'             => trans('theme::validation.required_with'),
            'required_with_all'         => trans('theme::validation.required_with_all'),
            'required_without'          => trans('theme::validation.required_without'),
            'required_without_all'      => trans('theme::validation.required_without_all'),
            'same'                      => trans('theme::validation.same'),
            'size'                      => trans('theme::validation.size'),
            'starts_with'               => trans('theme::validation.starts_with'),
            'string'                    => trans('theme::validation.string'),
            'timezone'                  => trans('theme::validation.timezone'),
            'unique'                    => trans('theme::validation.unique'),
            'url'                       => trans('theme::validation.url'),
            'uid'                       => trans('theme::validation.uid')
        ];
    }

}
