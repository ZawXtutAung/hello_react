import React from 'react';
import Toolbar from './Toolbar';
import './App'
class Title extends React.Component{
    render(){
    return<h1>{this.props.name}</h1>;
    }
}
class Header extends React.Component{
    render(){
        return(
            <div>
                <Title name={this.props.name}/>
            </div>
        )
    }
}
//Note--> Functional Components = Class And Const <---/////////
///Class
// class Item extends React.Component{
// render(){
//     return(
//         <li>
//             {this.props.name},
//             ks{this.props.price}
//         </li>
//         );
//
// }
// }
////Functional Components= Const
const Item=({name,price})=>(
    <li>{name},mm/ks{price}</li>
)

class AddForm extends React.Component{
    nameRef=React.createRef();
    priceRef=React.createRef();
    add=()=>{
         let name =this.nameRef.current.value;
        let price =this.priceRef.current.value;
        this.props.add(name,price);
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.nameRef}/><br/>
            <input type="text" ref={this.priceRef}/><br/>
            <button onClick={this.add} > Add </button>
            </div>
        )
    }

}

class App extends React.Component{
    state={
        items:[
            {id:1,name:'apple',price:200},
            {id:2,name:'banana',price:100},
        ]
    }
    nameRef = React.createRef();
    priceRef = React.createRef();
    add=(name,price)=>{
        let id=this.state.items.length+1;
        this.setState({
            items:[
                
                ...this.state.items,
                {id,name,price}
            ]
        });
    }
  render(){
    return(
       
        <div>
            <Toolbar>
                <h1>Hello React</h1>
 <h2>Component composition</h2>
            </Toolbar>
            <Header name="React App"/>
            <h1>Hello React</h1>
            <ul>
                {this.state.items.map(i=>{
                    return(
                        <Item key={i.id} name={i.name} price={i.price}
                        />
                    )
                })}
            </ul>
            <AddForm add={this.add} />

        </div>
    )
  }
}

export default App;