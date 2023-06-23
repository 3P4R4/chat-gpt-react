const PORT = 8000;
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
/* const corsOptions = {
    origin: 'http://localhost:8000',
}; */

/* app.use(cors(corsOptions)); */
app.listen(PORT, () => console.log('El server está corriendo en el puerto ' + PORT));

const API = "Mi clave API"

app.post('/completions', async (req, res)=>{
    const options = {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${API}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo",
            messages: [{role:"user", content: req.body.message}],
            max_tokens: 50,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json()
        res.send(data)
    } catch (error) {
     console.error(error)   
    }
})