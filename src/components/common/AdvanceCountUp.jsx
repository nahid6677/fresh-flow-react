import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const AdvanceCountUp = ({ ending = 32, durations = 3, dependOn = false }) => {
    const [x, setX] = useState(true);

    useEffect(() => {
        setX(false)
    }, [dependOn])


    if (!x) return (
        <span >
            <CountUp
                start={0}
                end={ending}
                duration={durations}
                delay={0}
                separator=","
                // decimals={2}
                decimal="."
                prefix="     "
                suffix=""
            />
        </span>
    );
};

export default AdvanceCountUp;