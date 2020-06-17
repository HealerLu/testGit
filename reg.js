//const nameReg = /^[\u4E00-\u9FA5A-Za-z]+[·•]?[\u4E00-\u9FA5A-Za-z]+$/
/*const nameReg = /^[\u4e00-\u9fa5a-zA-Z0-9#—-]+$/

if(!nameReg.test("是线@#$%^&*上")) {
    console.log(`错误`)
}else {
    console.log(`正确`)
}
const a = /^[\u4e00-\u9fa5a-zA-Z0-9#—-]+$/*/


/*const checkIdCard = (cardID) => {
    const l_l_jym = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];
    let l_l_total = 0;
    for (let i = 0, len = cardID.length; i < len - 1; i++) {
        l_l_total += parseInt(cardID[i]) * l_l_jym[i];
    }
    if (/^[0-9]*$/.test(cardID.substring(17))) {
        l_l_total += parseInt(cardID.substring(17));
    } else if ("X" ===(cardID.substring(17))) {
        l_l_total += 10;
    }
    l_l_total--;
    return l_l_total % 11 === 0;
}

console.log(checkIdCard("432502199405181018"))*/
const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/

