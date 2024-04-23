import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';

import '@/styles/habit-log-select.scss';

type NumberSelectProps = {
    value: number | undefined;
    onValueChange: (value: number) => void;
};

function NumberSelect(props: NumberSelectProps) {
    const { value, onValueChange } = props;

    if (value == undefined) {
        return <Button onClick={() => onValueChange(0)}>Log today</Button>;
    } else {
        return (
            <div className="habitlogselect">
                <FontAwesomeIcon
                    onClick={() => {
                        if (value > 0) onValueChange(value! - 1);
                    }}
                    icon={faChevronLeft}
                />
                {value}
                <FontAwesomeIcon onClick={() => onValueChange(value! + 1)} icon={faChevronRight} />
            </div>
        );
    }
}

export default NumberSelect;
