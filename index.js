// Code your solution here
function findMatching(drivers,names){
    let filtering = drivers.filter(name => name.toUpperCase() === names.toUpperCase() )
    return filtering
}
function fuzzyMatch(drivers, letters){
    let filtering = drivers.filter(letter => letter[0] === letters[0])
    return filtering
}

function matchName(drivers, person){
    // console.log(drivers[0]["name"])}
    let filtering = drivers.filter(drivers => drivers.name === person)
    console.log(filtering)
    return filtering
}