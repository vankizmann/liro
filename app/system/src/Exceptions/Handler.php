<?php

namespace Liro\System\Exceptions;

use Exception;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends \Illuminate\Foundation\Exceptions\Handler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        $theme = app()->getTheme();

        if ( 
            $exception instanceof AuthorizationException ||
            $exception instanceof AuthenticationException ||
            $exception instanceof AccessDeniedHttpException
        ) {
            if ( $request->expectsJson() ) {
                return response()->json([ 'errors' => 'fu' ], 403);
            } else {
                return response()->view(config('cms.403'), [], 403);
            }
        }

        if ( $exception instanceof NotFoundHttpException ) {
            return response()->view(config('cms.404'), [], 404);
        }

        if ( $exception instanceof TokenMismatchException ) {
            return response()->view(config('cms.419'), [], 419);
        }

        $debug = config('app.debug');

        if ( $debug == true ) {
            return parent::render($request, $exception);
        }

        return response()->view(config('cms.500'));
    }

}
