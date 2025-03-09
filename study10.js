// control statement (loop/iteration/repetition) Ep.2
// break and continue ใน loop
//------------------------------
// 1. break in loop ทำงานเมื่อไหร่ จบลูปเลย
let aa = 1
while (aa<=5){
aa++;

    if (aa==3) {
        break
    }
    console.log (aa, 'Hello...')
    aa++;
}



// 2. continue in loop ทำงานเมื่อไหร่ จบลูปรอบนั้นไปรอบต่อไปเลย

let bb = 1
while (bb<=5){
    bb++;

    if (bb==3) {
        continue
    }
    console.log (bb-1, 'Hi...')
    aa++;
}