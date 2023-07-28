import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  
  /*
    Working with "ref's"
  */
  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  /*
    -JSX Limitations

    You can't return more than one "root" JSX element
    (you also can't store more than one "root" JSX element in a variable).

    The Solution: Always Wrap Adjacent Elements

    Important: Doesn't have to be a <div> - ANY element will do the trick.
  
    
    -A New Problem: "<div> Soup"

    In bigger apps, you can easily end up with tons of unnecessary <div>s
    (or other elements) which add no semantic meaning or structure to the page
    but are only there because of React's/JSX' requirement.

    The Solution: Wrapper Component
    -> Introducing Fragments
    <React.Fragment> or <>
    It's an empty wrapper component: It doesn't render any real HTML
    element to the DOM. But it fulfills React's/JSX' requirement.
  */

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          key="error-modal"
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card key="add-user-card" className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

/*
  Uncontrolled components

  If we access values with a ref
  Changes not controlled by react
  Using regular dom API

  Controlled components

  Using States in form elements
*/