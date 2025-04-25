import ModalHelper from "./ModalHelper.jsx";
import {order} from "../services/http.gateway.js";
import FormInput from "./FormInput.jsx";
import {useActionState, useContext, useState} from "react";
import {CARD_CTX} from "../context/CardCtxProvider.jsx";

export default function CheckoutModal({ isVisible, onClose, onCancel } ) {
    const [error, setError] = useState(null);

    const { items } = useContext(CARD_CTX);

    const submit = async (_, formData) => {
        const customer = {
            name: `${formData.get('firstName')} ${formData.get('lastName')}`,
            email: formData.get('email'),
            street: formData.get('street'),
            'postal-code': formData.get('zip'),
            city: formData.get('city')
        }

        try {
            await order(customer, [...items.values()]);
            onClose();
        }
        catch (e) {
            setError(e.message);
        }
        return Object.fromEntries(formData);
    }

    const [formState, submitAction, pending] = useActionState(submit, null)


    return (
        <ModalHelper
            isVisible={isVisible}
            onClose={onClose}
            onCancel={onCancel}
        >
            <h2>Checkout</h2>
            <form
                action={submitAction}
            >
                <FormInput defaultValue={formState.firstName} label="First name" name="firstName" required />
                <FormInput defaultValue={formState.lastName} label="Last name" name="lastName" required />
                <FormInput defaultValue={formState.email} label="Email" name="email" type="email" required />
                <FormInput defaultValue={formState.street} label="Street" name="street" required />
                <div className="control-row">
                    <FormInput defaultValue={formState.zip} label="Zip code" name="zip" required />
                    <FormInput defaultValue={formState.city} label="City" name="city" required />
                </div>

                {error && <p className="error">{error}</p>}

                <div className="modal-actions">
                    <button type="button" className="text-button" onClick={onClose}>Cancel</button>
                    <button
                        disabled={pending}
                        className="text-button primary-button"
                    >Pay</button>
                </div>
            </form>
        </ModalHelper>
    )
}