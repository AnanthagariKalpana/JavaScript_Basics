//Immediatly invoked function Expression
(function(){
 var x=10;
 console.log(x);
})();

(function(name){
    console.log("hello",name);
}
)("maha");

let a1=(function(a,b){
    return (a+b);
})(10,10);
console.log(a1);

var counter=(function(){
    var count=0;
    return {
        increment: function(){
            count++;
        },
        decrement: function()
        {
            count--;
        },getCount:function()
        {
            return count;
        }
    }
})();
counter.increment();
counter.decrement();
console.log(counter.getCount());