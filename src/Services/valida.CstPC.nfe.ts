function validaCstPisCofins(icms: any){

  switch (icms) {
    case '01':
    case '02':
    
    case '03':
    
    case '04':
    case '05':
    case '06':
    case '07':
    case '08':
    case '09':

    case '49':
    case '50':
    case '51':
    case '52':
    case '53':
    case '54':
    case '55':
    case '56':
    case '60':
    case '61':
    case '62':
    case '63':
    case '64':
    case '65':
    case '66':
    case '70':
    case '71':
    case '72':
    case '73':
    case '74':
    case '75':
    case '98':
    case '99':
      console.log('CST do Pis ou Cofins valido');
      return icms;
    break;

    default:
      console.log('CST do Pis ou Cofins invalido');
    return 'CST invalido';  
  }
};

export default validaCstPisCofins;



  