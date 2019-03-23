import React, { Component } from 'react';
import DataSource from '../components/DataSource'
import withSubScript from '../components/withSubScript'
import './commentList.css'

class CommentList extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
        this.addItem = this.addItem.bind(this)

    }
    render(){
        console.log(this.props.data)
        return(
            <div>
                <input type="text" ref='inp' placeholder="下载此文档的人为何如此的优秀~"/>
                <button onClick={this.addItem}>添加数据</button>
                <ul>
                    {
                        this.props.data.map((item,i)=>{
                            return <li key={i}>{item.msg}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    addItem(){
        console.log(this.refs.inp.value)
        if(this.refs.inp.value.trim()){
            DataSource.addComments({id:Date.now(),msg:this.refs.inp.value})
            this.refs.inp.value='';
        }

    }
}
export default withSubScript(CommentList,(ds)=>{return ds.getComments()})