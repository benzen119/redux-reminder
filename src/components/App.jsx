import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder} from '../actions';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text);
        const input = document.getElementById('text-input');
        input.value = '';
        input.focus();
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const { reminders } = this.props;
        return(
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return(
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-text">{reminder.text}</div>
                                <div onClick={() => this.deleteReminder(reminder.id)} className="remove-btn">X</div>
                            </li>

                        )
                    })
                }
            </ul>
        )
    }

    render(){
        return(
            <div className="App">
                <div className="title">
                    Reminder xd
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input id="text-input" onChange={event => this.setState({text: event.target.value})} className="form-control" placeholder="I have to..."/>
                    </div>
                    {this.renderReminders()}
                    <button onClick={() => this.addReminder()} type="button" className="btn btn-success">Add</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);