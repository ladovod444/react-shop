import {Header} from './components/Header'
import {Footer} from './components/Footer'
//import {Main} from './components/Main'
import {Shop} from './components/Shop'
import './App.css';

import React, {useEffect} from 'react'

function App() {

  // const req = () => {
  //   const auth = 'Authorization=0244e259-8f89bbb6-20b7242e-1fce12a7'
  //   const url = `https://fortniteapi.io/v2/shop?lang=en&${auth}`;
  //
  //   const object = {
  //     method: 'GET',
  //       headers: {
  //       //'Accept': 'application/json',
  //         //'Content-Type': 'application/json',
  //         'Authorization': '0244e259-8f89bbb6-20b7242e-1fce12a7',
  //         //'Host': 'api.producthunt.com'
  //     }
  //   }
  //
  //   console.log(url, object)
  //   const request = fetch(url, object)
  //     .then(result =>
  //       //console.log(result)
  //       result.json()
  //     )
  //     .then(data =>
  //       console.log(data.shop)
  //     )
  // }
  //
  // useEffect(() => {
  //   req();
  // })

  return (
    <>
      <Header />
      {/*<Main />*/}
      <Shop />
      <Footer />
    </>
  );

  // return (
  //   <div className="App">
  //     <i className="large material-icons">insert_chart</i>
  //   </div>
  // );
}

export default App;
