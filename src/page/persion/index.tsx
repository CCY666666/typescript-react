import React from 'react';
import Child from './child';

interface Counts {
  count: number
}
class Parent extends React.Component<any,Counts>{
  constructor(props:any){
    super(props);
    this.state = {
      count: 0
    }
  }
  add = ()=>{
    let { count } = this.state
    this.setState({count:count + 1})
  }
  render(){
    const { count } = this.state
    return(
      <div>
        <Child add={this.add}></Child>
        <div>{count}</div>
      </div>
    )
  }
}

export default Parent;
