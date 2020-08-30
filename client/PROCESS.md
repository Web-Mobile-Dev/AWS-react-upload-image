Register
    Client
        await axios.post(/register) (name, email, pass) 
            Response -> setState
            Error -> show error msg

    Server
        exports.register (req, res)
            User.findUser({email})
                User -> return res 'email exists - choose another'

*               ->  token = jwt.sign(name, email, pass) + env.JWT_ACCOUNT_ACTIVATION + expiresIn
                                                              [random string]
*                   emailParams = email, token
                    ses.sendEmail(params).promise()
                        .then   res.JSON({`...`})
                        .catch
    
    LocalStorage: no user entry
    coockie: no user entry
    db: no user entry

Activate               
    Client
        await axios.post(`${API}/register/activate`, { token })
            response -> setState
            error -> show error msg

    Server
        exports.registerActivate = (req, res)
*          jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded)
                error -> return res.JSON({...})

*               --> { name, email, pass } = jwt.decode(token)
                    username = shortId.generate()
                    if not user in db
                        newUser = new User({ username, name, email, pass })
                        newUser.save((err, result)

    LocalStorage: no user entry
    coockie: no user entry
    db: User
    
Login 
    Client
        await axios.post(`${API}/login`, { email, pass } )
*           response -> authenticate <- isAuth() <- getCookie('token') and getItem('user']
                        [setCookie and setLocalStorage]
                        
            error ->    set error msg

    Server
        exports.login = (req, res)
            User.find({email})
                !user -> return res "no such user"
*               !user.authenticate -> return res.JSON({...})
                
*               token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
                return res.JSON( token + user )

    LocalStorage: user
    coockie: token
    db: User
    
Logout
    Client
        removeCookie('token');
        removeLocalStorage('user');
    
    Server

    LocalStorage: removed
    cockie: removed
    db: User
    
  