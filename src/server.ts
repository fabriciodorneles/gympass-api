import { app } from './app'
import { env } from './env'

// app.listen(env.PORT, '0.0.0.0', () => {
//     console.log('🚀 HTTP Server Running on port 3333!')
// })

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 HTTP Server Running!')
  })
