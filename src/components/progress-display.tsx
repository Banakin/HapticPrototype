import '@/styles/progress-display.scss';

type ProgressProps = {
    value: number;
    vertical?: boolean;
    size: string;
};

export function ProgressBar(props: ProgressProps) {
    const { value, vertical, size } = props;

    if (vertical) {
        return (
            <div className={`progressbar ${vertical ? 'progressbarvertical' : ''}`} style={{ height: size }}>
                <div className="progressbarinner" style={{ height: value + '%' }}></div>
            </div>
        );
    } else {
        return (
            <div className={`progressbar ${vertical ? 'progressbarvertical' : ''}`} style={{ width: size }}>
                <div className="progressbarinner" style={{ width: value + '%' }}></div>
            </div>
        );
    }
}
