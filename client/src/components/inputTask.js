import React from 'react';
import img from '../assets/working.png';
import img2 from '../assets/work.png';
import './style.css';
import axios, { Axios } from 'axios';

class InputTask extends React.Component {

    state = {
        task: ""
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.task != "") {
            axios.post("http://localhost:5000/task", { name: this.state.task })
                .then(res => {
                    console.log(res);
                    this.setState({ task: "" });
                });
                window.location = "/";
        }
    };

    render() {
        return (
            <div className="row text-center">
                <div className="col-md-4">

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input className="form-control mt-5 ml-5" placeholder="Votre mission" name="task" onChange={(e) => this.handleChange(e)} value={this.state.task} style={{ width: "600px" }} />
                        <button type="submit" className="btn btn-primary mt-3" style={{ width: "350px", padding: "10px" }}>Ajouter une Mission</button>
                        <img src={img2} style={{ width: "200px", height: "200px" }} />
                    </form>

                </div>

                <div className="col-md-8">
                    <img src={img} style={{ width: "400px", height: "400px" }} />
                </div>

            </div>
        );
    }
};
export default InputTask;
