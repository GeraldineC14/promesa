let request = require("request")
request('https://www.google.com.pe',function(){
  console.log("URL cargada correctamente")
})

//Este método log se ejecuta antes, ya que todo el código se interpreta en paralelo
console.log("Esto debe suceder después")
