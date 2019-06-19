import React from 'react';
import { createStore, useRedux } from 'redux';
import DataModule from './module';
import './index.module.less';
const store = createStore(React.createContext(), DataModule)
function Dashboard () {
  
  return (
    <div>
      {
        DataModule.list .map(item => {
          return <span>{item}</span>
        })
      }
    </div>
  )
}
export default useRedux(store)(Dashboard);