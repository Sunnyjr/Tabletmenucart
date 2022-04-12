
import './App.css';
import SideBar from './sidecol/SideBar';
import Buttons from './Header/Buttons';
import DiviceList from './device/DiviceList';
import footer from './image/footer.png';
import Data from './data/Data.json';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datalist: Data.Object };
   
  }
  onDiviceClick = (ele, i) => {
    let datalist = this.state.datalist;
    if (ele.type == '1') {
      ele.type = 2; // change the type 
    }
    else {
      ele.type = 1; //if not remains same
    }
    datalist[i] = ele; //assign 
    this.setState({ datalist: datalist }); // tell the actual state  that the state is updated    
  }

 

render() {

  let datalist = this.state.datalist;
  let autharized = datalist.filter(obj => obj.type == '1');
  console.log("autharized...", autharized);
  let unautharized = datalist.filter(obj => obj.type == '2');
  console.log(" anautharized....", unautharized);

 

  return (
    <div className="App">
      <div className="container-fluid p-0 m-0">
        <div className="row m-0 p-0 " id='mainrow' >
          <div className="col-md-3 col-3 p-0 m-0" id="sidebar">
            {/* sidebar */}
            <SideBar />
          </div>
          <div className="col-md-9 col-9 p-0 m-0">
            {/* Buttons 1st row*/}
            <Buttons />

            <div className="searchbar"> 
            <input type="text" placeholder="Search" id="search"  value={} onChange={()}/>
            </div>
            {/* device 2nd row*/}                   
            <DiviceList result={autharized} onDiviceClick={this.onDiviceClick} text={'Autharized Device'} type={1} />

            <DiviceList result={unautharized} onDiviceClick={this.onDiviceClick} text={'Unautharized Device'} type={0} />


          </div>
          <div className="footer">
            <img src={footer} style={{ height: '40px', width: '1210px' }} />
          </div>
        </div>

      </div>
    </div>

  );

  }
};

export default App;
