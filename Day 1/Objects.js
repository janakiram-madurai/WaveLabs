var array = []; 

var obj = {a: "hello world", b: 42, c: true};

for (var k in obj) { 
    array.push(obj[k]);
}
console.log(array);