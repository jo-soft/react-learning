import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation} from "@tanstack/react-query";
import {createNewEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, error, isPending } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('../')
    }
  })

  function handleSubmit(formData) {
    mutate({
      event: formData
    })
  }

  return (
    <Modal onClose={() => navigate('../')}>
      { error ? <ErrorBlock title='Something went wrong' message={error.info?.message ?? "Failed to create event"} /> : null }
        <EventForm onSubmit={handleSubmit}>
          { isPending ?
              <p> Submitting ...</p> :
              <>
                <Link to="../" className="button-text">
                  Cancel
                </Link>
                <button type="submit" disabled={isPending} className="button">
            Create
          </button>
              </>
          }
      </EventForm>
    </Modal>
  );
}
