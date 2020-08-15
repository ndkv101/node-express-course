const express = require('express')
const app = express()
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
app.listen(PORT, () => { console.log(`server is running on port ${PORT}`) })