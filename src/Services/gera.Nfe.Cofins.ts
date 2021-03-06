function geraCofins(cofins:string) {
  
  if (cofins == 'CST invalido'){
    const COFINS = {message: 'CST do Cofins invalido'};

    return COFINS;
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
    const COFINS = {"cofins":{"cst":+`${ cofins }`+" - String - Obg","aliquota":"Number - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Obg"},"substituicaoTributaria":{"baseCalculo":"Number - Opc","aliquota":"Number - Opc","valor":"Number - Opc"}}};

    return COFINS;
  }

  
}

export default geraCofins;