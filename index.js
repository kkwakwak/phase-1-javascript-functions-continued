// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity2 = "go to the office") {
    return `This Monday, I will ${activity2}.`
}

function wrapAdjective (adjective = "*") {
    const inner = function (activity3 = "special") {
        return `You are ${adjective}${activity3}${adjective}!`
    }
    return inner
}