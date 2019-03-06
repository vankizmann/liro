<?php

namespace Liro\Menus\Rules;

use Illuminate\Contracts\Validation\Rule;

class RouteRule implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value, $passes = true)
    {
        return collect($value)->reduce(function ($passes, $item) use ($attribute) {
            $matches = preg_match('/^[a-z0-9\-\_\/]+$/i', $item['route']);
            return $passes && $matches && $this->passes($attribute, $item['children'], $passes);
        }, $passes);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('liro-menus::validation.route');
    }
}