import express from 'express'
import { routers } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { createConnection } from './database'

createConnection()
const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routers)

app.listen(3333, () => console.log('Server is running...'))
