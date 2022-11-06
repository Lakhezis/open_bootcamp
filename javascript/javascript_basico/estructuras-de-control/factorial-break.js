let multi = 1;
let i = 1;
while(i < 53) {
    if (i < 10) {
        multi *= (i + 1);
        i ++;
    } else {
        break;
    }
}