<?php

namespace Lirox\System\Providers;

use Illuminate\Database\DatabaseServiceProvider as ServiceProvider;

class DatabaseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom('app/database/migrations');
        parent::boot();
    }
}