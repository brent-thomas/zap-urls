export const generateRandomString = () => {
    const lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let string = ''
    for(let i = 0; i<6; i++){
        
        if(i % 2 === 0){
            let int = Math.ceil(Math.random() * 25)
            let alphabetCase = Math.ceil(Math.random() * 2)
            string+=lowercaseAlphabet[int]
        } else {
            let int = Math.ceil(Math.random() * 9).toString()
            string+= int
        }
       
    }

    console.log(string)

}

generateRandomString()