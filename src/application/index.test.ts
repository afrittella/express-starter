import app from './index'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import request from 'supertest'

it('should work', async function () {
    app.get('/', (req, res) => {
        res.send({ message: 'it works' })
    })
    const response = await request(app).get('/').expect(200)
    expect(response.body).toEqual({ message: 'it works' })
})
