var numberElement ;
var arr;
function addElement() {
    numberElement =prompt('Enter Total Elemnet Number Of Array');
    arr = new Array(numberElement)
    for (i = 0; i < numberElement; i++) {
        var add = prompt('Enter Number')
        arr[i] = add;
    }
    document.getElementById('exp').innerHTML ="Arr =["+arr+"]";
}
function reverseNumber(){
    var a;
    var first=0;
    var last = numberElement;
    for (var i = 0 ; i < numberElement ; i++ )
        if(first < last){
            a = arr[first];
            arr[first] = arr[last - 1];
            arr[last-1] = a;
            first++;
            last--;
        }
    document.getElementById('exp1').innerHTML = "Arr = ["+ arr+"]";
}