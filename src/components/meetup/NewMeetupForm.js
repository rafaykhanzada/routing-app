import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";
import { useRef } from "react";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const imageInputRef = useRef();
    function submitFormHandler(event){
      event.preventDefault();
      const enteredTitle = titleInputRef.current.value;
      const enteredaddress = addressInputRef.current.value;
      const entereddescription = descriptionInputRef.current.value;
      const enteredimage = imageInputRef.current.value;
      const mapping = {
        title:enteredTitle,
        image:enteredimage,
        address:enteredaddress,
        description:entereddescription
      }
      props.onAddMeetup(mapping);
    }
  return (
    <Card>
      <form className={style.form} onSubmit={submitFormHandler}>
        <div className={style.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <input type="text" required id="description" ref={descriptionInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={style.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
