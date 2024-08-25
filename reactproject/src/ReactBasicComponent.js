import { render } from "@testing-library/react";
import React ,{Component} from "react";
import '../src/ToDo.css'


export default class ReactBasicComponentc extends Component {

    constructor(){
        super()
        console.log("I am a Constructor")
        this.state = {
            Task : "",
            Desc : "",
            Time : "",
            tasks : []
        }


    }

    

    componentDidMount(){
        console.log("I am a Component did mount")
        this.setState({

        })
        

    
        

        //console.log(this.State)
    }

    handleChange = (e) => {
           this.setState({
            [e.target.name] : e.target.value
           })
    }

    handleAddTask = () => {
        const { Task, Desc, Time, tasks } = this.state;
        const newTask = { Task, Desc, Time };
        console.log("Adding task:", newTask);
        this.setState({
            tasks: [...tasks, newTask],
            Task: "",
            Desc: "",
            Time: ""
        }, () => {
            console.log("Updated tasks:", this.state.tasks);
        });
    }

    componentDidUpdate(){
        //console.log("i am in component did update")
    }


    render(){

           console.log("I am a render")
       
        return(
            <div>To do App

                <table>
                    <tr>
                        <th>
                            Task
                        </th>
                        <th>
                            Task Description
                        </th>
                        <th>
                            Estimated Time
                        </th>
                    </tr>
                    <tr>
                        <td>Wake up</td>
                        <td>Wake up at 5.30</td>
                        <td>5.30</td>
                    </tr>
                    <tr>
                        <td>{this.state.Task}</td>
                        <td>{this.state.Desc}</td>
                        <td>{this.state.Time}</td>
                    </tr>
                </table>


                <form>
                    Task : <input type="Task" name="Task" onChange={this.handleChange}></input>
                    Desc : <input type="Desc" name="Desc" onChange={this.handleChange}></input>
                    Time : <input type="Time" name="Time" onChange={this.handleChange}></input>
                    <button type="button" onClick={this.handleAddTask}>Add Task</button>
                </form>

                

               
            </div>
        )
    }
}