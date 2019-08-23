import React from 'react';
import Details from './Details';
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {title : 'laboratorio 4'};
    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    this.setState({title :  'Aplicaciones de Vanguardia' });
  }
  render(){
    return (
      <div> <h1>{this.state.title}</h1><br/>
      <Details detailTitle={this.state.title} detailValue={2}/>
      <br/><button onClick={this.changeState}> Change </button> </div>
    );
  }

}
export default Home;
