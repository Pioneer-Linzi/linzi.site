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
    },
    {
      lable: 'pve',
      url: 'http://pve.linzi.site/'
    },
    {
      lable: 'docker',
      url: 'http://docker.linzi.site/'
    },
    {
      lable: 'lede',
      url: 'http://lede.linzi.site/'
    },
    {
      lable: 'ikuai',
      url: 'http://ikuai.linzi.site/'
    },
    {
      lable: 'nas',
      url: 'http://nas.linzi.site/'
    },
    {
      lable: 'frpc',
      url: 'http://frpc.linzi.site/'
    },
    {
      lable: 'frps',
      url: 'http://frps.linzi.site/'
    },
    {
      lable: 'ubuntu',
      url: 'http://ubuntu.linzi.site/'
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
