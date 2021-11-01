// Your code here

function wrapAdjective(visualflare = "*"){
    return function notsaturdayFun(data = "special"){
        return `You are ${visualflare}${data}${visualflare}!`
    }
}
function saturdayFun(date = "roller-skate"){
    return `This Saturday, I want to ${date}!`;
}
function mondayWork(date = false){
    if(date === false){
        return "This Monday, I will go to the office."
    }
    return `This Monday, I will ${date}.`
}