import { useState } from "react"

const Count = () => {
    const [name, setName] = useState('')
    const [wordsCount, setWordsCount] = useState(0)
  
    const updateName = (e) => {
      setName(e?.target?.value)
  
      let inpurName = e?.target?.value
      let isSpace = 0
  
      for(var i = 0; i < inpurName.length; i++) {
        if(inpurName[i] === ' ') {
          isSpace++
        }
      }
  
      setWordsCount(e?.target?.value?.trim()?.split(' ').length)
  
      console.log('isSpace', isSpace);
    }

    return(
        <div>
            <h1>{name}</h1>
            <input placeholder='Enter your name here' onChange={updateName} />
            <p>Characters Count: {name.length}</p>
            <p>Words Count: {wordsCount}</p>
        </div>
    )
}

export default Count