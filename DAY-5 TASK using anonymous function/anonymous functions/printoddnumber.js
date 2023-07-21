let arr = [1,2,3,4,5,6,7,8,9];
let out='';
let print =function(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            out=out+" " +arr[i];
        }
    }
  return out;
}

console.log(print(arr));