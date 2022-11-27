import express from 'express'
import cors from 'cors'
import { enableDotEnvConfigs, asyncDatabase, catchUnhandledPromiseError } from './main'
import { logger } from './middlewares/logger'
import process from "process"

//Routers 
import appRouter from './routes/app' 
import theoryRouter from './routes/theory'

//Express app and your middlewares. I HATE (AND LOVE) YOU CORS!
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(logger)

//As possible, run main.js important functions over here.
enableDotEnvConfigs()
asyncDatabase()
catchUnhandledPromiseError()
const port = process.env.PORT;

//Are you listening?
app.listen(port, () => {
    console.log(`Server started at port ${port}.`)
})
  
//Access to routes 
app.use('/', appRouter)
app.use('/theory', theoryRouter)

export default app;