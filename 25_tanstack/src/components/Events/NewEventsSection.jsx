import { useQuery } from '@tanstack/react-query';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import {fetchEvents} from "../../util/http.js";

export default function NewEventsSection() {

  const { data, error, isPending } = useQuery({
    queryFn: fetchEvents,
    queryKey: ['events'],
    staleTime: 60 * 60  * 1000,
    gcTime: 10 * 60 * 60 * 1000,
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to fetch events"} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
