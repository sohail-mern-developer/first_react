import { useState } from "react"

const Count = () => {
    const [name, setName] = useState('')
    const [wordsCount, setWordsCount] = useState(0)
    const [obj, setObj] = useState({})
  
    const updateName = (e) => {
      let value = e?.target?.value;
      setName(value)
  
      setWordsCount(e?.target?.value?.trim()?.split(' ').length)
      
      let wordsArray = value?.trim()?.split(' ')
      let inpurName = value
      let isSpace = 0
  
      for(var v of wordsArray) {
        v = v?.toLowerCase();
        if(!obj[v]) {
          obj[v] = 1
        } else {
          obj[v]++
        }
      }
  
      setObj({...obj})

    }

    return(
        <div>
            <h1>{name}</h1>
            <input placeholder='Enter your name here' onChange={updateName} />
            <p>Characters Count: {name.length}</p>
            <p>Words Count: {wordsCount}</p>

            <div>
              {Object.entries(obj)?.map((v,i) => {
                return <p key={i}>
                {`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)} : 
                  ${v[1]}`}
              </p>
              })}
            </div>
        </div>
    )
}

export default Count