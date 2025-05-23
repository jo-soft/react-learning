import {useRef, useState} from 'react';
import { useQuery} from "@tanstack/react-query";
import {fetchEvents} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";

export default function FindEventSection() {
  const searchElement = useRef();

  const [ searchTerm, setSearchTerm ] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: ( { signal, queryKey } ) => fetchEvents( { signal, queryParams: queryKey[1] } ),
    queryKey: ['events', { search: searchTerm }],
    enabled: searchTerm !== null,
  })


  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term</p>

  if(isLoading) {
    content = <LoadingIndicator/>
  }

  if (isError) {
    content = <ErrorBlock title='Something went wrong' message={error.info?.message ?? "Failed to fetch events"} />
  }

  if (data){
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
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      { content }
    </section>
  );
}
