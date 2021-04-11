/* istanbul ignore file */

import app from './application'

app.get('/', (req, res) => {
    res.send('It works!')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})
