"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function geraIcms(icms) {
    if (icms == 'CST/CSOSN do ICMS invalido') {
        var ICMS = { message: 'CST/CSOSN do ICMS invalido' };
        return ICMS;
    }
    ;
    if (icms == '00') {
        var ICMS = { "icms": { "origem": "String-Obg", "cst": +("" + icms) + " - String-obg", "aliquota": "Number-obg", "valor": "Number-obg", "baseCalculo": { "modalidadeDeterminacao": "Number-obg", "valor": "Number-obg" }, "fundoCombatePobreza": { "aliquota": "Number-Opc", "valor": "Number-Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '10') {
        var ICMS = { "icms": { "origem": "String-Obg", "cst": +("" + icms) + " - String-Obg", "aliquota": "Number-Obg", "valor": "Number-Obg", "baseCalculo": { "valor": "Number-Obg" }, "fundoCombatePobreza": { "aliquota": "Number-Opc", "baseCalculo": { "valor": "Number-Opc" }, "valor": "Number-Opc" }, "substituicaoTributaria": { "aliquota": "Number-Obg", "valor": "Number-Obg", "baseCalculo": { "valor": "Number-Obg", "percentualReducao": "Number-Opc", "modalidadeDeterminacao": "Number-Obg" }, "margemValorAdicionado": { "percentual": "Number-Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number-Opc" }, "aliquota": "Number-Opc", "valor": "Number-Opc" } }, } };
        return ICMS;
    }
    ;
    if (icms == '20') {
        var ICMS = { "icms": { "origem": "String-Obg", "cst": +("" + icms) + " - tring-Obg", "aliquota": "Number-Obg", "valor": "Number-Obg", "baseCalculo": { "modalidadeDeterminacao": "Number-Obg", "percentualReducao": "Number-Obg", "valor": "Number-Obg" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number-Opc" }, "aliquota": "Number-Opc", "valor": "Number-Opc" }, "desoneracao": { "valor": "Number-Opc", "motivo": "Number-Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '30') {
        var ICMS = { "icms": { "origem": "String-Obg", "cst": +("" + icms) + " - String-Obg", "aliquota": "Number-Obg", "valor": "Number-Obg", "substituicaoTributaria": { "baseCalculo": { "valor": "Number-Obg", "percentualReducao": "Number-Opc" }, "aliquota": "Number-Obg", "valor": "Number-Obg", "fundoCombatePobreza": { "baseCalculo": { "valor": "Number-Opc" }, "aliquota": "Number-Opc", "valor": "Number-Opc" }, "margemValorAdicionado": { "percentual": "Number-Opc" } }, "desoneracao": { "valor": "Number-Opc", "motivo": "Number-Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '40' || icms == '41' || icms == '50') {
        var ICMS = { "icms": { "origem": "String-Obg", "cst": +("" + icms) + "- String-Obg", "desoneracao": { "valor": "Number-Opc", "motivo": "Number-Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '51') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "aliquota": "Number - Opc", "valor": "Number - Opc", "baseCalculo": { "modalidadeDeterminacao": "Number - Opc", "percentualReducao": "Number - Opc", "valor": "Number - Opc" }, "diferimento": { "percentual": "Number - Opc", "valor": "Number - Opc", "valorIcmsDevido": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '60') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "aliquota": "Number - Opc", "valor": "Number - Opc", "substituicaoTributaria": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" } }, "efetivo": { "percentualReducao": "Number - Opc", "valor": "Number - Opc", "aliquota": "Number - Opc", "baseCalculo": { "valor": "Number - Opc" }, }, } };
        return ICMS;
    }
    ;
    if (icms == '70') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "aliquota": "Number - Obg", "valor": "Number - Obg", "baseCalculo": { "percentualReducao": "Number - Obg", "valor": "Number - Obg", "modalidadeDeterminacao": "Number  - Opc" }, "substituicaoTributaria": { "baseCalculo": { "valor": "Number - Obg", "modalidadeDeterminacao": "Number - Obg", "percentualReducao": "Number -  Opc" }, "aliquota": "Number - Obg", "valor": "Number - Obg", "margemValorAdicionado": { "percentual": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number  - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" } }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number  - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" }, "desoneracao": { "valor": "Number - Opc", "motivo": "Number - Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '90') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "aliquota": "Number - Opc", "valor": "Number - Opc", "baseCalculo": { "percentualReducao": "Number - Opc", "valor": "Number - Opc", "modalidadeDeterminacao": "Number  - Opc" }, "substituicaoTributaria": { "baseCalculo": { "valor": "Number - Opc", "modalidadeDeterminacao": "Number - Opc", "percentualReducao": "Number -  Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", "margemValorAdicionado": { "percentual": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number  - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Op" } }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number  - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" }, "desoneracao": { "valor": "Number - Opc", "motivo": "Number - Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '101') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "creditoSimplesNacional": { "valor": "Number - Obg", "percentual": "Number - Obg" } } };
        return ICMS;
    }
    ;
    if (icms == '102' || icms == '103' || icms == '300' || icms == '400') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg" } };
        return ICMS;
    }
    ;
    if (icms == '201') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "substituicaoTributaria": { "baseCalculo": { "modalidadeDeterminacao": "Number - Obg", "valor": "Number - Obg", "percentualReducao": "Number - Opc" }, "aliquota": "Number - Obg", "valor": "Number - Obg", "margemValorAdicionado": { "percentual": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" }, }, "creditoSimplesNacional": { "percentual": "Number - Opc", "valor": "Number - Opc" } } };
        return ICMS;
    }
    if (icms == '202' || icms == '203') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "substituicaoTributaria": { "baseCalculo": { "valor": "Number - Obg", "modalidadeDeterminacao": "Number - Obg", "percentualReducao": "Number - Opc" }, "aliquota": "Number - Obg", "valor": "Number - Obg", "margemValorAdicionado": { "percentual": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valo": "Number - Opc" } }, } };
        return ICMS;
    }
    ;
    if (icms == '500') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "valor": "Number - Opc", "substituicaoTributaria": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", } }, "efetivo": { "percentualReducao": "Number - Opc", "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" } } };
        return ICMS;
    }
    ;
    if (icms == '900') {
        var ICMS = { "icms": { "origem": "String - Obg", "cst": +("" + icms) + " - String - Obg", "baseCalculo": { "modalidadeDeterminacao": "Number - Opc", "percentualReducao": "Number - Opc", "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", "substituicaoTributaria": { "baseCalculo": { "modalidadeDeterminacao": "Number - Opc", "percentualReducao": "Number - Opc", "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc", "ufDevido": "String - Opc", "margemValorAdicionado": { "percentual": "Number - Opc" }, "fundoCombatePobreza": { "baseCalculo": { "valor": "Number - Opc" }, "aliquota": "Number - Opc", "valor": "Number - Opc" } }, "operacaoPropria": { "percentual": "Number - Opc" }, "creditoSimplesNacional": { "percentual": "Number - Opc", "valor": "Number - Opc" } } };
        return ICMS;
    }
    ;
}
exports.default = geraIcms;
