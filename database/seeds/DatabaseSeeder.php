<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call([
             ModuleTableSeeder::class,
             PolicyTableSeeder::class,
             RoleTableSeeder::class,
             UserTableSeeder::class,
             LanguageTableSeeder::class,
             TranslationTableSeeder::class,
             FrontendMenuTableSeeder::class,
             BackendMenuTableSeeder::class,
         ]);
    }
}
