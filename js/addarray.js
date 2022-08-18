var arr;
function addArr(){
   var n = prompt('Emter Element Array:')
   arr = new Array(n);
   for (var i = 0 ; i < n ; i ++){
      var add = +prompt('nhap so vao mang: ')
      arr[i] = add;
      
   }
}
function displayArr(){
   var numberArr = document.getElementById('addArray1').value;
   document.getElementById('exp').innerHTML = arr[numberArr];
   console.log(arr)
}
function displayArr1(){
   for (var i = 0 ; i < arr.length; i++){
       document.write("Element " + i + " " + "= " + arr[i] + "<br>")
      console.log(i)
   }
}
