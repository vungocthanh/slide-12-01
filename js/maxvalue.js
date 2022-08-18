var arr;
var n;
function addArr(){
    n = prompt('Enter toltal Number Element Of Arr')
    arr = new Array(n);
    for (i = 0; i < n; i++) {
        var elem = prompt('Enter Number Element Of Arr ')
        arr[i] = elem;
    }
    document.getElementById('exp').innerHTML = "Array = [" + arr + "]";
}
function findValue() {
    var maxNum = arr[0];
    for (i = 0; i < arr.length; i++)
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    document.getElementById('exp1').innerHTML = "Max Value of Array = " + maxNum;
}