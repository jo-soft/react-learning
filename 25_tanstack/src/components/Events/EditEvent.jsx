import {Link, useNavigate, useParams} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data,  error } = useQuery({
    queryFn: ({ signal}) => fetchEvent({ id, signal }),
  });
  const { mutate }  = useMutation({
    mutationFn: updateEvent,
    onMutate: async ({event}) => {
      await  queryClient.cancelQueries(['events', id]);
      const oldEvent = queryClient.getQueryData(['events', id]);
      queryClient.setQueriesData(['events', id], event)
      return oldEvent
    },
    onError: (error, variables, { oldEvent}) => {
      queryClient.setQueriesData(['events', id], oldEvent)
    },
    onSettled: async () => {
        await queryClient.invalidateQueries(['events']);
        }
  });

  function handleSubmit(formData) {
    mutate( { id, event: formData})
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content = <div className='center'> <LoadingIndicator/> </div>
  if( error) {
    content = <div className='center'> <ErrorBlock title='Failed fetching event' message={error.info?.message || 'Something went wrong'}/> </div>
  }
  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
  }

  return (
    <Modal onClose={handleClose}>
      { content }
    </Modal>
  );
}
