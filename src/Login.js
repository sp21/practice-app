import React from 'react';
class Login extends React.Component{

    constructor(){
        super();
        this.state={name:'',password:'',isLogin:false};
    }
    validateLogin(name,password){
        if(name===password){
            this.setState({isLogin:true})
        }
    }
    render(){
        return <React.Fragment>
            <div className="form">
                <input type="number" onChange={(e)=>{this.setState({name:e.target.value})}} />
                <input type="number" onChange={(e)=>{this.setState({password:e.target.value})}} />
                <button className="btn" onClick={()=>{this.validateLogin(this.state.name,this.state.password)}}>Login</button>
            </div>

        </React.Fragment>
    }
}
export default Login;