import '@/styles/progress-display.scss';

export function ProgressCirlce() {
    return (
        <svg width="250" height="250" viewBox="0 0 250 250" className="circular-progress">
            <circle className="bg"></circle>
            <circle className="fg"></circle>
        </svg>
    );
}
