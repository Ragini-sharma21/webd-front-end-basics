

function average(arr){
    let sum=0;
    arr.forEach(element=>{
        sum+=element;

    });
    return sum/arr.length;
}
module.exports = { // mod module yeh export kr rha h
    avg : average,
    name : "Harry",
    repo : "Github"
}
