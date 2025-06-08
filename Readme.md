# complete backend 
--complete backend series is started by hitesh sir.

# pretier packages install
--npm i -D  pretier install for best font and UI view


# ctrl +space click karne se kisi particular chiz ka hint milta hai.
# utiles/service both are same where we will write code of service that we will provides again and again


# shark 256 is SHA-256 algorithm , a cryptographic hash function that generate a 256-bit hash.


# cloudinary url(service where we upload the video/audio/images/file  for processing rather than upoading on own server)
# cloudinary is like AWS sdk service where we host website 
--during upoading file 2 packages are needed for backend
1. express file upload
2. multer file upload

# till here we have done only configurations for project setup.
eg- app.js
    constant.js
    index.js
    utils
    models
    middleware
    DB


# now we will make controller and routes for actual projects.
--------------------------------------------------------------
# HTTP crash course :-
URL-uniform resource locator
URI-uniform resource identifier
URN-uniform resource name


# Q.what are HTTP header : ( Codebase )
-- meta data-------------->key-value sent along with request and response

caching,authentications,state management
 --> x-prefix-->2012(now x is deprecated)
 eg- x_nitesh.pdf


 1. request header-------------from client
 2. response header-------from server
 3. representations header----------encoding/compressing
 4. payload header---------------data (id,email etc...)


 # most common heade
 1. accept :applications /json
 2. user-agent
 3. authorizations :
 4. content-type
 5. cookie
 6. cache-control

 # cors header
 1. access-control-allow-origin
 2. access-control-allow-credentials
 3. access-control-allow-method

 # seccurity header
 1. cross-origin-encoded-policy
 2. cross-origin-opener-policy
 3. content-security-policy
 4.x-xss-protections



 # HTTP method--
 1. GET------Retrieve a resource
 2. HEAD-----no message body(response header only)
 3. OPTIONS-----what operations are avilable
 4. TRACE-----loopback test (get same data)
 5. DELETE----remove a resource
 6. PUT-----replace a resource
 7. POST----interact with resource(mostly add)
 8. PATCH----change part of a resource


 # HTTP status code 
 1. 1XX-----informations
 2. 2XX-----success
 3. 3XX-----redirection
 4. 4XX----client error
 5. 5XX-----server error

 eg-
 100---continue
 102--processing
 200-ok


 ---> before writting controller ,we must know about HTTP.
 # Note :writting more and more controller will increase the logic.
--->npm run dev se run hoga. run dev
