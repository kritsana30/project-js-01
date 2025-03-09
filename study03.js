// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = 'aaaa ${10 * 5}'
let bb = "bbbb ${10 * 5}"
let cc = `cccc ${10 * 5}` //${ expression นิพจน์ }
console.log(aa, bb, cc)

// number
let dd = 111  //integer
let ee = 22.34253 //float
console.log(dd, ee)
console.log(`dd ee`)
console.log(`${dd} ${ee}`)

// boolean
let ff = true
let gg = false
console.log(ff, gg)

// object
let hh = {  
    //key : value
    name: 'John',
    age: 30,
    major: 'DTI',
    uni: `SAU ${10 * 20}`
}
console.log(hh)
console.log(`ชื่อ ${hh.name} อายุ ${hh.age}`)
console.log(hh.uni)

// array
//         0   1   2   3
let ii = [10, 20, 30, 40]
console.log(ii)
console.log(ii[1])
console.log(ii[0] * ii[3])

// undefined ข้อมูล
let jj
let kk = undefined
console.log(jj)
console.log(kk)

// null ข้อมูล
let ll = null
console.log(ll)

// type checking การตรวจสอบชนิดข้อมูล
console.log( typeof kk)
console.log( typeof ll)
console.log( typeof hh)
console.log( typeof dd)