import React,{Component} from 'react';
import Input from './inputfield';
import RadioButton from './radiobutton';
class Run extends Component{
    state ={
        "ActionDisplayName":"Submit",
        "Attributes":[
            {
                "Name":"Name",
                "size":"10",
                "Type":"TextBox"
            },
            {
                "Name":"Gender",
                "Options":[
                    {
                        "DisplayValue":"Male",
                        "Value":"male"
                    },
                    {
                        "DisplayValue":"Female",
                        "Value":"female"
                    }
                ],
                "Type":"RadioButton"
            }
        ]
    }
   
    submitForm = event =>{
        const{Attributes, ...inputFields} = this.state;
        console.log(inputFields);
        event.preventDefault();
    };       
   _handleChange=event=>{
       this.setState({
        [event.currentTarget.name]:event.currentTarget.Value
          });
        };
        render(){
            const {Attributes} = this.state;
            return(
                <div className="body">
                <div className="container">
                    <form onSubmit={this.submitForm} >
              {Attributes.map(data =>{
                  if(data.Type === "TextBox"){
                        return(<Input
                        Name={data.Name}
                        size={data.Size}
                        _handleChange={this._handleChange}
                          />
                    );
                }
                  if(data.Type === "RadioButton"){
                      return(
                          <RadioButton
                          Name={data.Name}
                          Options={data.Options}
                          />
                      );
                  }
                })}
                  
                <div>
                    <input type="submit" value={this.state.ActionDisplayName}/>
                </div>
            

                    </form>
                </div>
                </div>
       );
    }    
}
export default Run;