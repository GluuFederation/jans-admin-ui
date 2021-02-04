import React from "react";

class SimpleCustomProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	dataArr: [{value1: "", value2: "", description: ""}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  addClick(){
    this.setState(prevState => ({ 
    	dataArr: [...prevState.dataArr, { value1: "", value2: "", description: "" }]
    }))
  }
  
  createUI(){
     return this.state.dataArr.map((el, i) => (
       <div key={i}>
    	  <input placeholder="Value1" name="value1" value={el.value1 ||''} onChange={this.handleChange.bind(this, i)} />
          <input placeholder="Value2" name="value2" value={el.value2 ||''} onChange={this.handleChange.bind(this, i)} />
          <input placeholder="Description" name="description" value={el.description ||''} onChange={this.handleChange.bind(this, i)} />
    	  <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
       </div>          
     ))
  }
  
  handleChange(i, e) {
     const { name, value } = e.target;
     let dataArr = [...this.state.dataArr];
     dataArr[i] = {...dataArr[i], [name]: value};
     this.setState({ dataArr });
  }
  
  removeClick(i){
     let dataArr = [...this.state.dataArr];
     dataArr.splice(i, 1);
     this.setState({ dataArr });
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state.dataArr));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.createUI()}        
          <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
          <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));