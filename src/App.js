import './App.css'
import { useState, useEffect } from 'react';
// import * as Components from './Components'
import { PropsDemo } from './Components'


const App = () => {

 // console.log('Components', Components);
  
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('my name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohailmy name is sohail')
  const [apiCallsCount, setApiCalls] = useState(1)

  useEffect(() => {
    setInterval(() => {
      setApiCalls(apiCallsCount + 1)
    }, 2000);
  }, [])

  const [obj, setObj] =useState({ })

  const addKeyValue = () => {
    // setObj({...obj, [key]: value})
    obj[key] = value
    setObj({...obj })

    console.log('Obj', Object.entries(obj));

    setKey('')
    setValue('')
  }

  return (
    <div>
      {/* <Todo /> */}
      <PropsDemo message={message} apiCallsCount={apiCallsCount} /> 
      {/* <div>
        <input name='key' value={key} onChange={e => setKey(e.target.value.replace(' ', '_'))} placeholder='Please enter key here!' />
        <input name='value' value={value} onChange={e => setValue(e.target.value)} placeholder='Please enter value here!' />
        <button onClick={addKeyValue}>Add</button>
      </div>
      <div>
        {Object.entries(obj)?.map((v, i) => {
          return <p key={i}>
            {`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)} : 
              ${v[1]?.charAt(0)?.toUpperCase()}${v[1]?.slice(1,)}`}
          </p>
        })}
      </div> */}
    </div>
  );
}

export default App;