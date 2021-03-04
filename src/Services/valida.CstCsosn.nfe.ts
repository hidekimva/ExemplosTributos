function validaCstCsosn(icms){
  const { cst } = icms;

  switch (cst) {
    case '00':
    case '10':
    case '20':
    case '30':
    case '40':
    case '41':
    case '50':
    case '60':
    case '70':
    case '90':
      console.log('ICMS com  CST');
      return cst;
    break;
    case '101':
    case '102':
    case '103':
    case '201':
    case '202':
    case '203':
    case '300':
    case '400':
    case '500':
    case '900':
      console.log('ICMS com  CSOSN');
      return cst;
    break;

    default:
      console.log('CST/CSOSN do ICMS invalido');
    return 'CST/CSOSN do ICMS invalido';  
  }
};

export default validaCstCsosn;



  