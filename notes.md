Use proper status codes:

200 → success GET

201 → created

400 → bad request (client error, missing field)

409 → conflict (duplicate resource)

500 → server error


--plan feature add toast for success and error 
--add public post that dont have request token auth