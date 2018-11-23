<?php

use Illuminate\Support\Collection;

Collection::macro('trans', function ($key, $default = null) {
    return app('translator')->trans(
        $this->get($key, $default)
    );
});