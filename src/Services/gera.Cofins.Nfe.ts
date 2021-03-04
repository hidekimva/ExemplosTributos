function geraCofins(cofins) {
  
  if (cofins == 'CST invalido'){
    return 'CST do Cofins invalido'
  }

  if (cofins == '01' || cofins == '02'){
    const COFINS = {"cofins":{"cst":+`${cofins}`+" - String - Obg","aliquota":"Number - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Obg"},}}

    return COFINS;
  };

  if (cofins == '03') {
    const COFINS = {"cofins":{"cst":+`${cofins}`+" - String - Obg","quantidadeVendida":"Number - Obg","aliquotaReais":"Number - Obg","valor":"Number - Obg"}};

    return COFINS;
  };

  if (cofins >= '04' && cofins <= '09') {
    const COFINS = {"cofins":{"cst":+`${ cofins }`+" - String - Obg"}}

    return COFINS;
  };

  if (cofins >= '49') {
    const COFINS = {"cofins":{"cst":"01 - String - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Opc"},"aliquota":"Number - Opc","quantidadeVendida":"Number - Opc","aliquotaReais":"Number - Opc","substituicaoTributaria":{"baseCalculo":"Number - Opc","aliquota":"Number - Opc","quantidadeVendida":"Number - Opc","aliquotaReais":"Number - opc","valor":"Number - Opc"}}};

    return COFINS;
  }

  
}

export default geraCofins;