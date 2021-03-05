import { Router } from 'express';

import validaCstCsosn from '../Services/valida.CstCsosn.nfe';
import validaCstPC from '../Services/valida.CstPC.nfe';
import geraIcms from '../Services/gera.Icms.Nfe';
import geraPis from '../Services/gera.Pis.Nfe';
import geraCofins from '../Services/gera.Cofins.Nfe';

const tributosNFe = Router();

tributosNFe.get('/', async (request, response) => {
  const {icms,pis,cofins} = request.query;
  console.log(icms,pis,cofins);

  const CSTCSOSN = validaCstCsosn(icms);   
  const dadosICMS = geraIcms(CSTCSOSN);
  const CSTPis = validaCstPC(pis);
  const dadosPis = geraPis(CSTPis);
  const CSTCofins = validaCstPC(cofins);
  const dadosCofins = geraCofins(CSTCofins);
  
  return response.json({dadosICMS,dadosPis,dadosCofins});    
});


export default tributosNFe;