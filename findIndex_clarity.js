// Removing Redundancy from the data
let Array_With_Duplicate = [
    {id:1,name:'Karan'},
    {id:2,name:'Karan Singh'},
    {id:3,name:'Ninja'},
    {id:4,name:'Klp'},
    {id:5,name:'Karan'},
];

// we want to create array with no duplicate value
let unique_Array = [];

Array_With_Duplicate.map(item=>{
    
    let hasIndex = unique_Array.findIndex(uItem=>uItem?.name === item?.name)
    if(hasIndex<0) unique_Array.push(item)
})

console.log('Unique Array-->>',unique_Array);