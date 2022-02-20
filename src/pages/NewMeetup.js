import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

  function addMeetup(meetupData) {
    fetch(
      "https://react-meetup-c0dad-default-rtdb.firebaseio.com/meetups.json",
      {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    ).then(() => {
        navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup}></NewMeetupForm>
    </section>
  );
}

export default NewMeetupPage;
