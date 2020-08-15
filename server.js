const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000


const mockUserData = [
    { name: 'Mark' },
    { name: 'Jane' },
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successful got users!',
        users: mockUserData,
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user!',
        user: req.params.id,
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const mockUserName = 'billyTheKid'
    const mockPassword = 'superSecret'

    if (username === mockUserName && password === mockPassword) {
        res.json({
            success: true,
            message: 'credentials match!',
            token: 'encrypted token go here'
        })
    } else {
        res.json({
            success: false,
            message: 'credentials do not match!',
        })
    }
})
app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) })