import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/styles/habit-log-select.scss';

type CheckSelectProps = {
    value: boolean | undefined;
    onValueChange: (value: boolean) => void;
};

function CheckSelect(props: CheckSelectProps) {
    const { value, onValueChange } = props;

    return (
        <div className="habitlogselect">
            <FontAwesomeIcon
                className={value != undefined && value ? 'selected' : ''}
                onClick={() => onValueChange(true)}
                icon={faCheck}
            />
            <FontAwesomeIcon
                className={value != undefined && !value ? 'selected' : ''}
                onClick={() => onValueChange(false)}
                icon={faX}
            />
        </div>
    );
}

export default CheckSelect;
