import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"; 

const Card = React.forwardRef(({ data }, ref) => {
  return (
    <motion.div 
      drag 
      whileDrag={{ scale: 1.2 }} 
      dragElastic={0.5} 
      ref={ref} 
      className="relative w-60 flex-shrink-0 h-80 bg-zinc-900 rounded-[60px] text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full py-3 left-0'>
        <div className='flex items-center justify-between mb-5 py-3 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size="0.8em" color='#fff' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div 
            className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"} overflow-hidden flex items-center justify-center`}
          >
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default Card;
