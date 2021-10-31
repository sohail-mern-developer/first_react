import './App.css'
import Count from './Count';


const App = () => {

  return (
    <div>
      
      <Count /> 
      {/* <h1>Names & Emails</h1>
      
        {obj.map((v, i) => {
          return (
            <div key={i}>
              <span>{i + 1}) Name: {v?.name}</span>
              <br />
              <span> &nbsp; &nbsp; Email: <b>{v?.email}</b></span>
              <br />
              {v?.address&&<span> &nbsp; &nbsp; Address: <b>{v?.address}</b></span>}
            </div>
          
          )
        })} */}
    </div>
  );
}

export default App;