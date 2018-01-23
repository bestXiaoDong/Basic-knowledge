// symbol 是新增的原始数据类型
{
    let s = Symbol();  // Symbol 前面不能是用new ，生成的 Symbol 是一个原始类型的值，不是对象，所以不能添加属性
    console.log(typeof s); //--> symbol
}

{
    // 作为属性名的Symbol，由于每一个symbol值是不等的，所以用作属性名不会出现重名现象
    let mySymbol = Symbol();

    let a = {};
    a[mySymbol] = 'a';

    console.log(a[mySymbol])
}