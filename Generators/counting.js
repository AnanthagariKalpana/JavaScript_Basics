function* countGen()
{
    let count=0;
    while(true)
    {
        yield count;
        count++;
    }
}
let res=countGen();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);