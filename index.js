import app from './app'

const port = 3000
app.listen(port, app => {
    console.log('Server listening at ' + port)
})