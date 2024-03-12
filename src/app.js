const express = require('express') 
const path = require('path');

const productsRouter = require("./routes/products.router")
const cartsRouter = require("./routes/carts.router")


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)





app.get('/', (req, res) => {
    res.send('Hola desde Express!');
  });

app.listen(8080, () => {
    console.log('Servidor listo!')
})