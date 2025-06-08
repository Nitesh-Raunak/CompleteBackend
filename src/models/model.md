# use of mongoose-aggregate-paginate-v2----it is a package which allows us to write mongo aggregatation query.(aggregatation pipeline)
# use of bcrypt and bcryptJS----it is a library which hash the passwords.

# use of jsonwebtoken(go to this website jwt.io)--------token (data will be sended to DB as token form in encryption form(cryptography) for this jsonwebtoken is used.)
--jsonwebtoken ---used for security.
# { timestamps: true }  ---this part will automatically stores the ( created at and created by ) data in DB



# to use  bcrypt and jsonwebtoken ,we have to use hookes provided by mongoose.

--does not use arrow function in mongoose hookes ,bcoz arrow function have not reference of current context(i.e this references);