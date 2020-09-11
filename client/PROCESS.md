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

    Client
        authenticate(response, () =>
                isAuth() && isAuth().role === 'admin' ? Router.push('/admin') : Router.push('/user')
            );

            user/index  -> withUser(User) 
                        -> WithUser ->  const response = await axios.get(`${API}/user`, headers: {
*                                                    authorization: `Bearer ${token}`, .....}
                                        user ? await Page
                                            : redirect '/'

            admin/index -> withAdmin(User)
                        -> ...

    LocalStorage: user
    coockie: token
    db: User

Forgot Passwword
    Client
        <Link href="/auth/password/forgot">
            <a className="text-danger float-right">Forgot Password</a>
                |
                v
        response = await axios.put(`${API}/forgot-password`, { email })
            setState
            error
    Server
        exports.forgotPassword = (req, res) 
            User.findOne({ email }).exec((err, user) 
                error -> return res.status(400).json

            const sendEmail = ses.sendEmail(params).promise()
                data => message: `Email has been sent to ${email}.
                error => message: `We could not vefiry your email

    Client [id]
        response = await axios.put(`${API}/reset-password`, { resetPasswordLink: token, newPassword })
    
    Server
        exports.resetPassword = (req, res)
            jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, (err, success)

                User.findOne({ resetPasswordLink }).exec((err, user)
                    user = _.extend(user, updatedFields);
                    user.save((err, result) => {
    
Logout
    Client
        removeCookie('token');
        removeLocalStorage('user');
    
    Server

    LocalStorage: removed
    cockie: removed
    db: User
    
  