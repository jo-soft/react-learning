export  default function  FormInput ({label, name, type='text', ...props}) {
    return (
            <div className="control-row">
            <div className="control">
                <label htmlFor={name}>{label}</label>
                <input
                    {...props}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={label}
                />
            </div>
        </div>
    )
}