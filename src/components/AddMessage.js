import React from "react";
import PropTypes from "prop-types";

/*
Input component at the bottom of the chat App
When Enter is pressed, tha value of the input is dispatched

props dispatch the value of the input and "Me" to the AddMessage container

*/
const AddMessage = (props) => {
  let input;

  return (
    <section id="new-message">
      <p>
        <small>New message:</small>
      </p>
      <input
        class="new-message-input"
        size="100"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            // Dispatching value of the input and string "Me" (Name of the current user)
            props.dispatch(input.value, "Me");
            // Resets input value
            input.value = "";
          }
        }}
        type="text"
        // React way to get the value from an input
        /*
        When the component renders the first time, you want to bind the DOM node to the this object of the component.
        Then you have access to the DOM node. In the code snippet above it is used to get the input value of the input element when you submit the form.
        */
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

// Avoiding Linting errors
AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
