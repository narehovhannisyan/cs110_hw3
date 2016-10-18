<!DOCTYPE html>
<html>
<body>
<script> 
    
const reverse = function(arr){
    const arr1 = [];
    for(let i = arr.length-1;i>=0; i--){
        arr1[arr1.length] = arr[i];
    }
    return arr1;
}
const reversedarray = reverse([1,2,3,4,5,6,7]);
console.log(reversedarray);

</script>				
</body>
</html>