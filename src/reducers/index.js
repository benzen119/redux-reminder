import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
}

const reminders = (state=[], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, {
                id: Math.random(),
                text: action.text
            }];
            return reminders;

        case DELETE_REMINDER:
        reminders = removeById(state, action.id);
            return reminders;
    
        default:
            return state;
    }
}

export default reminders;