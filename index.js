const JSONserver=require('json-server')
const MPServer=JSONserver.create()
const Router=JSONserver.router('db.json')
const middileware=JSONserver.defaults()


const PORT =4000 || process.env.PORT

MPServer.use(middileware)
MPServer.use(Router)

MPServer.listen(PORT,()=>{
    console.log(`media-Player Server started at PORT:${PORT}.. and wating for the client request`)
})


