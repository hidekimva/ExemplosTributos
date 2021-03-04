function geraIcms(icms) {
  if(icms == 'CST/CSOSN do ICMS invalido') {
    return 'CST/CSOSN do ICMS invalido'
  };
  
  if (icms == '00') {
    
    const ICMS = {"icms":{"origem":"String-Obg","cst":+`${icms}`+" - String-obg","aliquota":"Number-obg","valor":"Number-obg","baseCalculo":{"modalidadeDeterminacao":"Number-obg","valor":"Number-obg"},"fundoCombatePobreza":{"aliquota":"Number-Opc","valor":"Number-Opc"}}};
    
    return ICMS;
  };

  if (icms == '10') {
    const ICMS = {"icms":{"origem":"String-Obg","cst":+`${icms}`+" - String-Obg","aliquota":"Number-Obg","valor":"Number-Obg","baseCalculo":{"valor":"Number-Obg"},"fundoCombatePobreza":{"aliquota":"Number-Opc","baseCalculo":{"valor":"Number-Opc"},"valor":"Number-Opc"},"substituicaoTributaria":{"aliquota":"Number-Obg","valor":"Number-Obg","baseCalculo":{"valor":"Number-Obg","percentualReducao":"Number-Opc","modalidadeDeterminacao":"Number-Obg"},"margemValorAdicionado":{"percentual":"Number-Opc"},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number-Opc"},"aliquota":"Number-Opc","valor":"Number-Opc"}},}}
    
    return ICMS;
    
  };
    
  if (icms == '20') {
    const ICMS = {"icms":{"origem":"String-Obg","cst":+`${icms}`+" - tring-Obg","aliquota":"Number-Obg","valor":"Number-Obg","baseCalculo":{"modalidadeDeterminacao":"Number-Obg","percentualReducao":"Number-Obg","valor":"Number-Obg"},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number-Opc"},"aliquota":"Number-Opc","valor":"Number-Opc"},"desoneracao":{"valor":"Number-Opc","motivo":"Number-Opc"}}}
    
    return ICMS;
  };

  if (icms == '30') {
    const ICMS = {"icms":{"origem":"String-Obg","cst":+`${icms}`+" - String-Obg","aliquota":"Number-Obg","valor":"Number-Obg","substituicaoTributaria":{"baseCalculo":{"valor":"Number-Obg","percentualReducao":"Number-Opc"},"aliquota":"Number-Obg","valor":"Number-Obg","fundoCombatePobreza":{"baseCalculo":{"valor":"Number-Opc"},"aliquota":"Number-Opc","valor":"Number-Opc"},"margemValorAdicionado":{"percentual":"Number-Opc"}},"desoneracao":{"valor":"Number-Opc","motivo":"Number-Opc"}}}

    return ICMS;
  };

  if (icms == '40'  || icms == '41' || icms == '50') {
    const ICMS = {"icms":{"origem":"String-Obg","cst":+`${icms}`+ "- String-Obg","desoneracao":{"valor":"Number-Opc","motivo":"Number-Opc"}}};

    return ICMS;
  };

  if (icms == '51') {
    const ICMS = {"icms":{"origem":"String - Obg","cst":+`${icms}`+" - String - Obg","aliquota":"Number - Opc","valor":"Number - Opc","baseCalculo":{"modalidadeDeterminacao":"Number - Opc","percentualReducao":"Number - Opc","valor":"Number - Opc"},"diferimento":{"percentual":"Number - Opc","valor":"Number - Opc","valorIcmsDevido":"Number - Opc"},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc"}}};

    return ICMS;
  };

  if (icms == '60') {
    const ICMS = {"icms":{"origem":"String - Obg","cst":+`${icms}`+" - String - Obg","aliquota":"Number - Opc","valor":"Number - Opc","substituicaoTributaria":{"baseCalculo":{"valor":"Number - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc","fundoCombatePobreza":{"baseCalculo":{"valor":"Number - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc"}},"efetivo":{"percentualReducao":"Number - Opc","valor":"Number - Opc","aliquota":"Number - Opc","baseCalculo":{"valor":"Number - Opc"},},}};

    return ICMS;
  };

  if (icms == '70') {
    const ICMS = {"icms":{"origem":"String - Obg","cst":+`${icms}`+" - String - Obg","aliquota":"Number - Obg","valor":"Number - Obg","baseCalculo":{"percentualReducao":"Number - Obg","valor":"Number - Obg","modalidadeDeterminacao":"Number  - Opc"},"substituicaoTributaria":{"baseCalculo":{"valor":"Number - Obg","modalidadeDeterminacao":"Number - Obg","percentualReducao":"Number -  Opc"},"aliquota":"Number - Obg","valor":"Number - Obg","margemValorAdicionado":{"percentual":"Number - Opc"},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number  - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc"}},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number  - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc"},"desoneracao":{"valor":"Number - Opc","motivo":"Number - Opc"}}};

    return ICMS;
  };

  if (icms == '90') {
    const ICMS = {"icms":{"origem":"String - Obg","cst":+`${icms}`+" - String - Obg","aliquota":"Number - Opc","valor":"Number - Opc","baseCalculo":{"percentualReducao":"Number - Opc","valor":"Number - Opc","modalidadeDeterminacao":"Number  - Opc"},"substituicaoTributaria":{"baseCalculo":{"valor":"Number - Opc","modalidadeDeterminacao":"Number - Opc","percentualReducao":"Number -  Opc"},"aliquota":"Number - Opc","valor":"Number - Opc","margemValorAdicionado":{"percentual":"Number - Opc"},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number  - Opc"},"aliquota":"Number - Opc","valor":"Number - Op"}},"fundoCombatePobreza":{"baseCalculo":{"valor":"Number  - Opc"},"aliquota":"Number - Opc","valor":"Number - Opc"},"desoneracao":{"valor":"Number - Opc","motivo":"Number - Opc"}}};

    return ICMS;
  };

}

export default geraIcms;