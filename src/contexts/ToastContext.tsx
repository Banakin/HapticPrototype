import { nanoid } from 'nanoid';
import { useCallback, useState, createContext } from 'react';
import '@/styles/toasts.scss';

const ToastContext = createContext({
    addToast: (message: string) => {
        message;
    },
});

export default ToastContext;

type Toast = {
    id: string;
    message: string;
};

export function ToastContextProvider(props: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState(new Array<Toast>());

    const addToast = useCallback(
        function (message: string) {
            const toast: Toast = {
                id: nanoid(5),
                message: message,
            };
            setToasts((toasts) => [...toasts, toast]);
            setTimeout(() => setToasts((toasts) => toasts.slice(1)), 3000);
        },
        [setToasts],
    );

    return (
        <ToastContext.Provider value={{ addToast: addToast }}>
            {props.children}
            <div className="toasts-wrapper">
                {toasts.map((toast: Toast) => (
                    <div className="toast" key={toast.id}>
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
