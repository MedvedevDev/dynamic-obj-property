{
    const o = {
        prop: "propValue"
    };

    console.log(o); // {"prop":"propValue"}
}
{
    const prop = "propKey";

    const o = {
        a: 1,
        b: 2
    };
    o[prop] = "propValue";

    console.log(o); // {"a":1,"b":2,"propKey":"propValue"}
}
{
    const prop = 'propKey';
    const o = {
        a: 1,
        b: 2,
        [prop]: 'propValue'
    };

    console.log(o); // {"a":1,"b":2,"propKey":"propValue"}
}