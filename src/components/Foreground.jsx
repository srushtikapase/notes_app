import React, { useRef } from 'react';
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Sohum Nikam is the best one currently working off for everything", 
            filesize: ".9mb", 
            close: true, 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Sohum Nikam is the best one currently working off for everything", 
            filesize: ".9mb", 
            close: true, 
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
        },
        {
            desc: "Sohum Nikam is the best one currently working off for everything", 
            filesize: ".9mb", 
            close: true, 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} ref={ref} />
            ))}
        </div>
    );
}

export default Foreground;
