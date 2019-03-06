---
title: How the Web Works, HTTP Request/Response
layout: page
---

### Learning Goals

* Identify the parts of a URL
* Identify the parts of an HTTP request
* Identify the parts of an HTTP response

## Vocabulary

- URI, URL
- User Agent
- HTTP request/response
- resource


## What is "URL"

- "Universal Resource Locator"
- send data to, or retrieve, a "resource" on the Internet
- resource examples to retrieve: a page of HTML content, an image, a music file
- resource creation through forms, file uploads, etc


#### URL vs URI

- "URI", aka "Universal Resource Identifier" is not the same as a URL
- A URI is part of a URL


### Parts of a URL

A URL can be split into distinct parts:

* Protocol: `http://` - describes how data will be transmitted
* Domain: `task-manager.herokuapp.com` - where the resource is located
* Path: `/task/new` - specific path for the resource we are trying to access
* Query String: `?title=New&task=Task` - Additional parameters, give the server more information about what we are trying to access
* Fragment Identifier: `#new_form_anchor` - indicator of a specific section of a resource we are accessing; typically causes browser to scroll down on a page to that location

The "Domain", "Path", and "Query String" combined indicate a unique "identifier" for a resource, and all three of these pieces are a "URI".

Adding a protocol to a URI makes the whole thing a URL


### HTTP Request

- client (typically a web browser application) is requesting or transmitting data.
- a payload of data is sent to a server as a "request"
- request has three main parts:
  - A Request line:
    - the HTTP method (also called a "verb")
    - the URI "path" of the resource
    - the type and version of the protocol our "client" software is using

  - Headers, which is a key/value pair, which contain supplemental information about our request

  - An optional body; we only send data to the server in the body when we are creating or modifying something


### HTTP Response

- server will build a response for each request
- response has three main parts:
  - a Status line:
    - The type and version of the protocol that this response is using
    - a 3-digit numeric "status code"
    - string description of the "status code" meaning

  - Headers, also sent as key/value pairs similar to the HTTP request

  - An optional body; almost all responses will contain additional data in the body. In mod 2, our "body" payload will almost always be HTML.

## Seeing HTTP requests and responses in action

Use a terminal to fetch the Google home page

Enter `curl google.com -v` in a terminal window and review the output.

```
* Rebuilt URL to: google.com/
*   Trying 2607:f8b0:400f:800::200e...
* Connected to google.com (2607:f8b0:400f:800::200e) port 80 (#0)
> GET / HTTP/1.1
> Host: google.com
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Location: http://www.google.com/
< Content-Type: text/html; charset=UTF-8
< Date: Thu, 31 Aug 2017 01:09:30 GMT
< Expires: Sat, 30 Sep 2017 01:09:30 GMT
< Cache-Control: public, max-age=2592000
< Server: gws
< Content-Length: 219
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: SAMEORIGIN
<
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="http://www.google.com/">here</A>.
</BODY></HTML>
* Connection #0 to host google.com left intact
```

- the `>` symbol indicates the request
- the `<` symbol indicates the response

## turn and talk

- encourage students to discuss the results they see, identify as much as they can, and raise questions

## more theory

in the request:
- point out the three parts of the Request Line (verb, path, protocol)
- point out the headers, explain Host and User-Agent
  - explain that `curl` acting as a browser in a limited capacity
- the blank line indicates the end of the headers

in the response:
- point out the three parts of the Response Line (protocol, status code, meaning)
- point out the headers, explain Location and Content-Length

## curl Student Site

- encourage students to use 'curl' to request a web page of their choice
- turn & talk

### CFU

* What are the parts of an HTTP request?
* What are the parts of an HTTP response?
* Identify the different parts of a URL and explain their purpose
