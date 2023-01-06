import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://finosys-dbeb1-default-rtdb.firebaseio.com/mapping.json")
      .then( (response) => {
        return response.json();
      })
      .then((data) => {
        const meetups =[];
        for (const key in data) {
         const meetup = {
          id:key,
          ...data[key]
         }
         meetups.push(meetup);
        }
        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <div>All Meetup Page!</div>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupPage;
