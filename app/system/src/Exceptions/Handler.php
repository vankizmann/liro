<?php

namespace Liro\System\Exceptions;

use Exception;

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
     * @param \Exception  $exception
     * @throws \Exception
     * @return mixed
     */
    public function report(Exception $exception)
    {
        return parent::report($exception);
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
        $statusCode = method_exists($exception, 'getStatusCode') ?
            $exception->getStatusCode() : 0;

        if ( $exception->getCode() === 403 || $statusCode === 403 ) {
            return response()->view("errors/403", [
                'statusCode' => $statusCode, 'exception' => $exception
            ], 403);
        }

        if ( $exception->getCode() === 404 || $statusCode === 404 ) {
            return response()->view("errors/404", [
                'statusCode' => $statusCode, 'exception' => $exception
            ], 404);
        }

        if ( config('app.debug') == true ) {
            return parent::render($request, $exception);
        }

        return response()->view("errors/500", [
            'statusCode' => $statusCode, 'exception' => $exception
        ], 500);
    }

}
