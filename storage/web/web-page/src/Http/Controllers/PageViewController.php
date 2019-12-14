<?php

namespace Liro\Web\Page\Http\Controllers;

use App\Http\Controllers\Controller;
use Liro\Menu\Routing\Traits\DiscoverMenu;

class PageViewController extends Controller
{
    use DiscoverMenu;

    public function __construct()
    {
        parent::__construct();

        $this->middleware(['web']);
    }

    public function anyPageRoute()
    {
        if ( ! app('web.user')->canPolicyDepth($this->menu) ) {
            abort(404);
        }

        return view('web-page::page');
    }

}
