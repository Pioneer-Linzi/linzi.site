import React from 'react';
import './App.css';

function App() {
  const arr =[
    {
      lable: 'jenkins',
      url: '//jenkins.linzi.site'
    },
    {
      lable: 'portainer',
      url: 'http://portainer.linzi.site/'
    }
  ]
  return (
    <div className="App">
      <div className='list'>
        {
          arr.map((item)=>{
              return   (<a href={item.url}>
              <div className='item'>
                <span>
                    {item.lable}
                </span>
              </div>
              </a>)
          })
        }
      
      </div>
    </div>
  );
}

export default App;
