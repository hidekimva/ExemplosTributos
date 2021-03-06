function geraPis(pis:string) {
  
  if (pis == 'CST invalido'){
    const PIS = {message: 'CST do PIS invalido'};
    
    return PIS
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

  if (pis >= '49') {

    const PIS = {"pis":{"cst":+`${ pis }`+" - String - Obg","aliquota":"Number - Obg","valor":"Number - Obg","baseCalculo":{"valor":"Number - Obg"},"substituicaoTributaria":{"baseCalculo":"Number - Opc","aliquota":"Number - Opc","valor":"Number - Opc"}}};

    return PIS;
  };

}

export default geraPis;