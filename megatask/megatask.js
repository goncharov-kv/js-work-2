const squareEq = function(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    const top = -b + Math.sqrt(discriminant) ;
    const top2 = -b - Math.sqrt(discriminant) ;
    const bottom = 2 * a;
    const x1 = (top / bottom) / a;
    const x2 = (top2 / bottom) / a;
    if (discriminant < 0) {
        console.log("Коренів немає")
    }
    return `перший корінь = ${x1}; ` + `другий корінь = ${x2}`

}
console.log(squareEq(2, 8, 16))