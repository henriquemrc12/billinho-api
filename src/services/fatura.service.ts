import connection from "../config/typeorm-config";
import { Fatura } from "../models/fatura.entity";

async function saveFatura(fatura: Fatura){
    return await connection.then((con)=> con.getRepository(Fatura).save(fatura));
}

async function findFaturas(){
    return await connection.then((con)=> con.getRepository(Fatura).find());
}


export { saveFatura, findFaturas};
