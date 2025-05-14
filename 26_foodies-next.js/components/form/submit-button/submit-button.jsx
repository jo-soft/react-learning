'use client'

import { useFormStatus } from "react-dom";

export default function SubmitButton({children, alternate='submitting', ...props}) {

    const { pending } = useFormStatus();

    return (
        <button {...props} disabled={pending}>
            { pending ? alternate: children}
        </button>
    )
}