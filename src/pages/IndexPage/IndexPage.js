import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LoginChecker from '../../containers/LoginChecker/LoginChecker';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import RecordCard from '../../containers/RecordCard/RecordCard';
import DeleteConfirm from '../../components/DeleteConfirm/DeleteConfirm';
import AddRecordCard from '../../components/AddRecordCard/AddRecordCard';
import {
  setEmail,
  getRecordsAsync,
  writeRecordAsync,
  updateRecordAsync,
  deleteRecordAsync
} from '../../store/actions/actions';
import './IndexPage.css';

function IndexPage({
  spin,
  location,
  email,
  setEmail,
  records,
  getRecordsAsync,
  writeRecordAsync,
  updateRecordAsync,
  deleteRecordAsync
}) {
  
  const [addRecordCardComponentIsActive, setAddRecordCardComponentIsActive] = useState(false);
  const [deleteConfirmComponentIsActive, setDeleteConfirmComponentIsActive] = useState(false);
  const [titleInputValue, setTitleinputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [selectedRecordId, setSelectedRecordId] = useState('');

  const logOutHandler = () => {
    localStorage.setItem('email', '');
    setEmail('');
  };
  const clearInputsAndSelections = () => {
    setSelectedRecordId('');
    setTitleinputValue('');
    setPasswordInputValue('');
    setAddRecordCardComponentIsActive(false);
    setDeleteConfirmComponentIsActive(false);
  };

  useEffect(() => {
    getRecordsAsync(email)
  }, [email]);

  const formatDate = date => {
    if (!date) return false;

    const tempDate = new Date(date);
    const year = `${tempDate.getFullYear()}`;
    const month = tempDate.getMonth() + 1 < 10 ? `0${tempDate.getMonth() + 1}` : `${tempDate.getMonth() + 1}`;
    const day = tempDate.getDate() < 10 ? `0${tempDate.getDate()}` : `${tempDate.getDate()}`;

    return `${year}.${month}.${day}`;
  };
  const postRecord = () => {
    writeRecordAsync(email, titleInputValue, passwordInputValue);
    clearInputsAndSelections();
  };
  const patchRecord = () => {
    updateRecordAsync(titleInputValue, passwordInputValue, selectedRecordId);
    clearInputsAndSelections();
  };
  const deleteRecord = () => {
    deleteRecordAsync(selectedRecordId);
    clearInputsAndSelections();
  };
  return (
    <div className="index-page">
      <LoginChecker location={location} />
      {spin ? <Spinner /> : null}
      {
        addRecordCardComponentIsActive ? 
        <AddRecordCard 
          title={titleInputValue}
          password={passwordInputValue}
          titleInputHandler={({target: { value } }) => setTitleinputValue(value)}
          passwordInputHandler={({target: { value } }) => setPasswordInputValue(value)}
          onSubmitHandler={selectedRecordId ? patchRecord : postRecord}
          onCloseHandler={() => clearInputsAndSelections()}
        />
        : null
      }
      {
        deleteConfirmComponentIsActive ?
        <DeleteConfirm 
          closeHandler={clearInputsAndSelections}
          rejectHandler={clearInputsAndSelections}
          confirmHandler={deleteRecord}
        />
        : null
      }
      <Header title="Dashboard page">
        <Button onClick={() => setAddRecordCardComponentIsActive(true)}>add record</Button>
        <Button onClick={logOutHandler}>log out</Button>
      </Header>
      <ul className="index-page__records-list">
        {records.map(({ _id, created_date, updated_date, title, description }) => {
          const id = _id;
          const createdDate = formatDate(created_date);
          const updatedDate = formatDate(updated_date);
          return (
            <li key={id} className="index-page__records-list_item">
              <RecordCard
                editHandler={() => {
                  setSelectedRecordId(id);
                  setTitleinputValue(title);
                  setPasswordInputValue(description);
                  setAddRecordCardComponentIsActive(true);
                }}
                deleteHandler={() => {
                  setSelectedRecordId(id);
                  setDeleteConfirmComponentIsActive(true);
                }}
                createdAt={createdDate}
                editedAt={updatedDate}
                title={title}
                password={description}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
};

function mapStateToProps({ sharedReducer, dataReducer }) {
  return {
    email: sharedReducer.email,
    spin: sharedReducer.spin,
    records: dataReducer.records
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setEmail: email => dispatch(setEmail(email)),
    getRecordsAsync: email => dispatch(getRecordsAsync(email)),
    writeRecordAsync: (author, title, description) => dispatch(writeRecordAsync(author, title, description)),
    updateRecordAsync: (title, description, id) => dispatch(updateRecordAsync(title, description, id)),
    deleteRecordAsync: id => dispatch(deleteRecordAsync(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);