import { findFaturas } from "../services/fatura.service";

async function findAll(){
    return await findFaturas();
}

export {findAll};