function geraPis(pis) {
  
  if (pis == 'CST invalido'){
    return 'CST do PIS invalido'
  }

  if (pis == '01' || pis == '02'){
    const PIS = {"pis":{"cst":+`${pis}`+" - String - Obg","aliquota":"Number - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Obg"}}}

    return PIS;
  };

  if (pis == '03') {
    const PIS = {"pis":{"cst":+`${ pis }`+" - String - Obg","valor":"Number - Obg"}}

    return PIS;
  };

  if (pis >= '04' && pis <= '09') {
    const PIS = {"pis":{"cst":+`${ pis }`+" - String - Obg"}}

    return PIS;
  };

  if (pis >= 49) {

    const PIS = {"pis":{"cst":"49 - String - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Opc"},"aliquota":"Number - Opc","substituicaoTributaria":{"baseCalculo":"Number - Opc","aliquota":"Number - Opc","quantidadeVendida":"Number - Opc","aliquotaReais":"Number - Opc","valor":"Number - Opc"}}}

    return PIS;
  };

}

export default geraPis;