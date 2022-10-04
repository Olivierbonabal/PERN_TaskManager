import axios from 'axios';
import React from 'react';
import EditTask from './editTask';

class ListTask extends React.Component {

    state = {
        tasks: []
    }

    getTasks = () => {
        try {

            axios.get("http://localhost:5000/task")
                .then(res => {
                    this.setState({ tasks: res.data });
                    console.log(this.state.tasks);
                })

        } catch (err) {
            console.log(err.message);
        }
    };

    componentDidMount = () => {
        this.getTasks();
    };

    deleteTask = (e) => {
        try {

            axios.delete(`http://localhost:5000/task/${e}`)
                .then(res => {
                    console.log(res);
                });

            this.setState({ tasks: this.state.tasks.filter(task => task.todo_id != e) });

        } catch (err) {
            console.log(err.message);
        }
    };

    render() {
        return (
            <div>
                <table className="table mt-5 text-center borderless">

                    <thead>
                        <tr>
                            <th>Les Missions</th>
                            <th>Ajout</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.tasks.map(task => (
                                <tr key={task.todo_id}>
                                    <td> {task.name} </td>
                                    <td> <EditTask task={task}/> </td>
                                    <td><button class="btn btn-danger delete" onClick={() => this.deleteTask(task.todo_id)}>Supprimer</button></td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        );
    }
};
export default ListTask;