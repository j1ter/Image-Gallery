import { useEffect, useState } from 'react';

const ImagePerformanceStats = ({ image }) => {
    const [loadTime, setLoadTime] = useState(null);

    useEffect(() => {
        const img = new Image();
        const startTime = performance.now();

        img.onload = () => {
            const endTime = performance.now();
            const timeTaken = endTime - startTime;
            setLoadTime(timeTaken.toFixed(2) + 'ms');
        };

        img.src = image.urls.full;
    }, [image.urls.full]);

    return (
        <div>
            {loadTime && <p>Load Time: {loadTime}</p>}
        </div>
    );
};

export default ImagePerformanceStats;