let text = "aku dapet gajian 5jt diwarteg";
let result = text.includes("world");
if(text.includes('beli') || text.includes('makan') || text.includes('bayar')){
 console.log('pengeluaran')
}else if(text.includes('gaji') || text.includes('ditransfer') || text.includes('di transfer') || text.includes('pemasukkan')) {
 console.log('pemasukkan');
    if(text.indexOf('jt') || text.indexOf('k') || text.indexOf('rb')|| text.indexOf('t')) {
        let sum = text.indexOf('jt') || text.indexOf('k') || text.indexOf('rb')|| text.indexOf('t')
        console.log(sum-10)
        console.log(text.charAt(sum-10)) //string "t gajian 5jt"
        console.log('gajian 5jt')
        let nom = 'jt'
        let amount = 5
        if(nom == 'jt') {
           console.log(amount.toFixed(6))
        }
    }
}