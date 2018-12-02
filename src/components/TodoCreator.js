import React,{Component} from 'react'

export default class TodoCreator extends Component{
    
    state = {
        description:''
    }
    render(){ return (
        <div className = 'todocreator'>
            <input type = 'text' placeholder = 'enter a todo' value = {this.state.description} onChange = {this.hendleInputChange} onKeyUp = {this.hendleEnter} />
            <button onClick = {this.hendleClick} >
                Add
            </button>
        </div>
    )
    }
    hendleInputChange = (e) =>{
        const value = e.target.value;
        this.setState({
            description:value
        })
    }
    hendleClick = () =>{
        if (!this.state.description) {
            return;
        }
        
        const todo = {
            description:this.state.description,
            done:false
        }
        this.props.onTodoCreate(todo)
        
        this.setState({
            description:''
        })
    }   
    hendleEnter = (e) =>{
        if (e.keyCode === 13)
            this.hendleClick();
    }
}