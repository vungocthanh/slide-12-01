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
function valueNumberArr(){
    var value = document.getElementById('valueNumber').value;
    for ( i = 0 ; i < n ; i++)
    if ( value == arr[i]){
        document.getElementById('exp1').innerHTML = " Value = " + arr[i] + " at position " + i;
    }
}