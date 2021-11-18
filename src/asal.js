const sayi=751520
let counter=0
for (let i = 0; i < sayi; i++) {
    if(sayi % i==0 ){
        counter++;
        
    }
    break;
    
}console.log(counter>0 ? "sayı asal değil":"sayı asal")
