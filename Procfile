web: php artisan octane:start --server=swoole --host=0.0.0.0 --port=$PORT
worker: php artisan queue:work redis --queue=chat,chat-event --sleep=3 --tries=3 --daemon
