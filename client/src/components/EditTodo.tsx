import React from 'react';
import useEditTodo from '../store/useEditTodo';
import {motion} from 'framer-motion';

const EditTodo = () => {
    const {isEditTodoVisible,toggleEditTodo} = useEditTodo();

    return (
        <motion.div 
            className='absolute flex justify-center items-center bg-[rgba(0,0,0,0.1)] h-screen w-full top-0 left-0'
            initial={{opacity: 0}}
            animate={isEditTodoVisible ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.1}}
        >
            <motion.div 
                className='bg-white w-[47%] rounded-sm'
                initial={{opacity: 0}}
                animate={isEditTodoVisible ? {opacity: 1} : {opacity: 0}}
                transition={{duration: 0.1}}
            >
                {/* title */}
                <div className='py-2'>
                    <h1 className='text-2xl pl-4 font-semibold'>Edit Todo</h1>
                </div>

                {/* form */}
                <form className='flex flex-col'>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='Title' className='pl-4 focus-within:outline-none' />
                        <textarea placeholder='Description' className='pl-4 focus-within:outline-none' />
                    </div>

                    <div className='flex py-2 px-4  justify-between'>
                        <input type="submit" value="Add Todo" className='cursor-pointer p-2 bg-blue-500 duration-200 text-white hover:bg-blue-600 rounded-sm' />
                        <button onClick={toggleEditTodo} className='hover:bg-gray-200 duration-200 bg-gray-100 p-2 cursor-pointer rounded-sm'>Cancel</button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default EditTodo;
