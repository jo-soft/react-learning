import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {queryClient} from "../../util/http.js";

export default function EventDetails() {
  const navigate = useNavigate();

  const eventId = useParams().id;

  const {
    data, isPending, error
  } = useQuery({
        queryFn: ({signal}) => fetchEvent({
          signal, id: eventId
        }),
      queryKey: ['event', eventId],
      }
  )

  const {
      mutate: deleteMutation,
      isPending: deletionPending,
      error: deletionError
  } = useMutation({
      mutationFn: () => deleteEvent({ id: eventId}),
      onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['events', eventId] });
          navigate('/events');
      }
  });

    const handleDelete = async () => {
      const confirmed = confirm('Are you sure you want to delete this event?');
      if (confirmed) {
          deleteMutation()
      }
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        { deletionPending || isPending && <LoadingIndicator /> }
        { error && <ErrorBlock title="Failed fetching event" message={error.info?.message || 'Something went wrong'}/> }
        { deletionError && <ErrorBlock title="Failed delete event" message={deletionError.info?.message || 'Something went wrong'}/> }
        { data &&  <>
            <header>
            <h1> { data.title} </h1>
            <nav>
              <button onClick={handleDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
            <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="image" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{ data.location }</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{ data.date} @ {data.time}</time>
              </div>
              <p id="event-details-description">{ data.description }</p>
            </div>
          </div>
          </>}
      </article>
    </>
  );
}
