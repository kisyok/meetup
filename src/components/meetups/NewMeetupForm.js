import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descInput = useRef();

  function submitForm(event) {
    event.preventDefault();
    const title = titleInput.current.value;
    const image = imageInput.current.value;
    const address = addressInput.current.value;
    const desc = descInput.current.value;

    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: desc,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitForm}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInput}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInput}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInput}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Description</label>
          <textarea required id="desc" rows="5" ref={descInput}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
