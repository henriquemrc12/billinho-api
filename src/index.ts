import * as dotenv from 'dotenv';
import instituicaoDeEnsino from './routes/instituicao-de-ensino';
import aluno from './routes/aluno';
import matricula from './routes/matricula';
import fatura from './routes/fatura';
import express from 'express';
import fs = require('fs');

const swaggerUi = require('swagger-ui-express')

dotenv.config()
const app = express()
const port =  process.env.SERVER_PORT || 3000;

const swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

app.use(express.json())
app.use('/instituicao-de-ensino', instituicaoDeEnsino);
app.use('/aluno', aluno);
app.use('/matricula', matricula);
app.use('/fatura', fatura)
app.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(swaggerDocument, null, null));
  
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})