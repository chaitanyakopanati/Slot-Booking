export const ShowDigit = (number:number,showCount:number=2) =>{
    let showNumber:number=showCount
    let numberText = number.toString()
    if(showNumber){
        let result = numberText.split('',showNumber)
        if(result[result.length-1]==='.'){
            result.pop()
        }
        return result.join('')
    }else{
        return number
    }
}
  