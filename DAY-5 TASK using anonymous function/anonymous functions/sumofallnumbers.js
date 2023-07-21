let arr = [1,2,3,4,5,6,7,8,9];
let sum=0;
let sumofarr = function(arr)
{
    for(let i=0;i<arr.length;i++)
    {
       
         sum=sum + arr[i];
    }
    return sum;
}
console.log(sumofarr(arr));