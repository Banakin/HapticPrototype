import '@/styles/form-fields.scss';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormFieldProps = {
    id: string;
    label: string;
    placeholder?: string;
    formRegister: UseFormRegisterReturn;
    error?: FieldError;
};

interface TextFieldProps extends FormFieldProps {
    defaultValue?: string;
}

export function TextField(props: TextFieldProps) {
    const { id, placeholder, defaultValue, label, formRegister, error } = props;

    return (
        <div className="formfield">
            <label form={id}>{label}</label>
            <input id={id} className="input" placeholder={placeholder} defaultValue={defaultValue} {...formRegister} />
            {error && <span>{error.message}</span>}
        </div>
    );
}

interface NumberFieldProps extends FormFieldProps {
    defaultValue?: number;
}

export function NumberField(props: NumberFieldProps) {
    const { id, placeholder, defaultValue, label, formRegister, error } = props;

    return (
        <div className="formfield">
            <label form={id}>{label}</label>
            <input
                type="number"
                id={id}
                className="input"
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...formRegister}
            />
            {error && <span>{error.message}</span>}
        </div>
    );
}

interface SelectFieldProps extends FormFieldProps {
    defaultValue?: string;
    options: {
        display: string;
        value: string;
    }[];
}

export function SelectField(props: SelectFieldProps) {
    const { id, defaultValue, label, formRegister, error, options } = props;

    return (
        <div className="formfield">
            <label form={id}>{label}</label>
            <select id={id} defaultValue={defaultValue} {...formRegister}>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.display}
                    </option>
                ))}
            </select>
            {error && <span>{error.message}</span>}
        </div>
    );
}
