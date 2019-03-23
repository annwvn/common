import React, { Component } from 'react';
import DataSource from './DataSource'
export default function widthSubScript(WrapperComponent,fn){
    return class extends Component{
        constructor(props){
            super(props);
            this.state={
                data:fn(DataSource)
            }
            this.handle= this.handle.bind(this)
        }
        componentDidMount(){
            // console.log(fn(DataSource))
            DataSource.addChangeListener(this.handle)
        }
        handle(){
          this.setState({
              data: fn(DataSource)
          })
        }
        componentWillUnmount(){
          DataSource.removeChangeListener(this.handle)
        }
        render(){
            return <WrapperComponent data={this.state.data}/>
        }
    }
    
}