import { useState, useRef } from "react";
const SimpleInput = () => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef();
  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsValid(true);
    }
  };
  const inputNameBlurHanlder = () => {
    setIsTouched(true);
    if (userInput.trim() === "") {
      setIsValid(false);
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (userInput.trim() === "") {
      setIsValid(false);
      return;
    }
    console.log("using ref : " + inputRef.current.value);
    console.log("using State : " + userInput);
    // inputRef.current.value = "";
    setUserInput("");
    setIsValid(false);
    setIsTouched(false);
  };
  const valid = !isValid && !isTouched;
  const control_css = valid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={control_css}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          onChange={onChangeHandler}
          onBlur={inputNameBlurHanlder}
          value={userInput}
        />
        {!valid && <p>Please enter your name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
