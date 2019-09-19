import {
  SET_EMAIL,
  SET_SPIN,
  WRITE_RECORDS,
  WRITE_RECORD,
  UPDATE_RECORD,
  DELETE_RECORD
} from './actionTypes';

export const setEmail = email => ({
    type: SET_EMAIL,
    email
});
export const setSpin = spin => ({
    type: SET_SPIN,
    spin
});

const writeRecordsToStore = records => ({
    type: WRITE_RECORDS,
    records
});
const writeRecordToStore = record => ({
    type: WRITE_RECORD,
    record
});
const updateRecordInStore = record => ({
    type: UPDATE_RECORD,
    record
});
const deleteRecordFromStore = id => ({
    type: DELETE_RECORD,
    id
});

export const getRecordsAsync = email => async dispatch => {
  dispatch(setSpin(true));

  try {
    const response = await fetch(`https://raysael.herokuapp.com/todo?author=${email}`, {method: 'GET'});
    if (response.status !== 200) {
      throw new Error('An error occured, reload current page.');
    };
    const recordsFromServer = await response.json();
    dispatch(writeRecordsToStore(recordsFromServer));
  } catch(e) {
    alert(e);
  };

  dispatch(setSpin(false));
};

export const writeRecordAsync = (author, title, description) => async dispatch => {
  dispatch(setSpin(true));
  
  const body = {
    author,
    title,
    description
  };
  try {
    const response = await fetch(`https://raysael.herokuapp.com/todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    if (response.status !== 201) {
      throw new Error('an error occured, try again.');
    };
    const newRecord = await response.json();
    dispatch(writeRecordToStore(newRecord));
  } catch(e) {
    alert(e);
  };

  dispatch(setSpin(false));
};

export const updateRecordAsync = (title, description, id) => async dispatch => {
  dispatch(setSpin(true));
  
  const body = {
    title,
    description
  };
  try {
    const response = await fetch(`https://raysael.herokuapp.com/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
      throw new Error('An error occured, try again.');
    };
    const updatedRecord = await response.json();
    dispatch(updateRecordInStore(updatedRecord));
  } catch(e) {
    alert(e);
  };

  dispatch(setSpin(false));
};

export const deleteRecordAsync = id => async dispatch => {
  dispatch(setSpin(true));
  
  try {
    const response = await fetch(`https://raysael.herokuapp.com/todo/${id}`, {method: 'DELETE'});
    if (response.status !== 200) {
      throw new Error('An error occured, try again.');
    };
    dispatch(deleteRecordFromStore(id));
  } catch(e) {
    alert(e);
  };

  dispatch(setSpin(false));
};