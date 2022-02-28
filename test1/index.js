const http = require('http')
const a = undefined
const server =  http.createServer((req,res)=>{

    debugger //打断点
    const url  =req.url


    const path= url.split('?')[0]
    res.end(path+122397943)
})
server.listen(3000)
console.log('server listening on 3000')