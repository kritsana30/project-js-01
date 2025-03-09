// control statement (loop/iteration/repetition) Ep.3
// ทำงานเดิมๆ ซ้ำ
//------------------------------
// forEach ใช้กับ array
let aa = [10,20,30,40,50]
console.log(aa[0] * 10)
console.log(aa[1] * 10)
console.log(aa[2] * 10)
console.log(aa[3] * 10)
console.log(aa[4] * 10)
console.log('-------------------------------------')
aa.forEach ((item) => {
    console.log(item * 10)
});
console.log('-------------------------------------')
let bb = ['สมชาย','สมหญิง','สมหมาย']
console.log('สวัสดั ${bb[0]}')
console.log('สวัสดั ${bb[1]}')
console.log('สวัสดั ${bb[2]}')
console.log('-------------------------------------')
bb.forEach((item)=>{
    console.log('สวัสดี ${item}')
})

// for..in ใช้กับ object หรือ array
let cc= {
fullname: 'สมชาย ใจดี',
age: 20,
score: [10,20,30],
address:{
    no:'10/152',
    street:'เพชรเกษม',
    provice:'กทม.'
}    
}

console.log(cc.fullname)
console.log(cc.age)
console.log(cc.score[1])
console.log(cc.address.street)
for( keyname  in cc ) {
console.log(keyname)
console.log(cc[keyname])

}


// for..of ใช้กับ array
let dd = ['สมชาย','สมหญิง','สมหมาย']
console.log('สวัสดั ${dd[0]}')
console.log('สวัสดั ${dd[1]}')
console.log('สวัสดั ${dd[2]}')
console.log('-------------------------------------')
for (item of dd){
    console.log('สวัสดี ${item}')
}
    