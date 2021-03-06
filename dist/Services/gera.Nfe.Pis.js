"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function geraPis(pis) {
    if (pis == 'CST invalido') {
        var PIS = { message: 'CST do PIS invalido' };
        return PIS;
    }
    if (pis == '01' || pis == '02') {
        var PIS = { "pis": { "cst": +("" + pis) + " - String - Obg", "aliquota": "Number - Obg", "valor": "Number - Obg", "baseCalculo": { "valor": "Number - Obg" } } };
        return PIS;
    }
    ;
    if (pis == '03') {
        var PIS = { "pis": { "cst": +("" + pis) + " - String - Obg", "valor": "Number - Obg" } };
        return PIS;
    }
    ;
    if (pis >= '04' && pis <= '09') {
        var PIS = { "pis": { "cst": +("" + pis) + " - String - Obg" } };
        return PIS;
    }
    ;
    if (pis >= '49') {
        var PIS = { "pis": { "cst": +("" + pis) + " - String - Obg", "aliquota": "Number - Obg", "valor": "Number - Obg", "baseCalculo": { "valor": "Number - Obg" }, "substituicaoTributaria": { "baseCalculo": "Number - Opc", "aliquota": "Number - Opc", "valor": "Number - Opc" } } };
        return PIS;
    }
    ;
}
exports.default = geraPis;
