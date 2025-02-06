// import React from 'react';
// import { motion } from "framer-motion";

// const SlideUp = ({ children, id = 1 }) => {
//     const slideLeftVariants = {
//         offscreen: {
//             y: 50,
//             opacity: 0
//         },
//         onscreen: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 delay: (id === 1 ? 0 : 0.1 * id)
//             }
//         }
//     };

//     return (
//         <motion.div
//             variants={slideLeftVariants}
//             initial="offscreen"
//             whileInView="onscreen"
//             // Remove the once: true property
//             viewport={{ amount: 0 }} // Keep amount: 0 if needed
//         >
//             {children}
//         </motion.div>
//     );
// };

// export default SlideUp;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const SlideUp = ({ children, id = 1 }) => {
    const ref = useRef(null);
    const [entryFromTop, setEntryFromTop] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry) {
                    const { boundingClientRect, rootBounds } = entry;
                    if (rootBounds) {
                        setEntryFromTop(boundingClientRect.top < rootBounds.top);
                    }
                }
            },
            { threshold: 0.2 } // Adjust sensitivity
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const slideVariants = {
        offscreen: {
            y: entryFromTop ? -50 : 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: id === 1 ? 0 : 0.1 * id,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={slideVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default SlideUp;
