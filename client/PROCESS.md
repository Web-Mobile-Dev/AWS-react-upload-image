UPLOAD IMAGE TO AWS

    Login with role='admin'

    client  - pages/index
        <Link href="/admin/category/create">
            <a className="nav-link">Create category</a>

    client  - pages/admin/category/create.js
        const createCategoryForm = () => (
            <form onSubmit={handleSubmit}>

            const handleSubmit = async e => {
                const response = await axios.post(`${API}/category`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`

    server  - routes/category.js
        router.post('/category', requireSignin, adminMiddleware, create)

    server  - controollers/auth.js
        exports.requireSignin = expressJwt({ secret: process.env.JWT_SECRET })
        exports.adminMiddleware = (req, res, next) => {
            User.findOne({ _id: adminUserId }).exec
            if admin
                req.profile = user
                next()

    server  - controllers/category.js
        exports.create = (req, res) => {
            let form = new formidable.IncomingForm()
            form.parse
            let category = new Category({ name, content, slug })
            s3.upload(params, (err, data) => {
            category.save((err, success) => {
            return res.json(success);    

    client  - routes/category.js
        success: `${response.data.name} is created`   




                    
                    

    


    