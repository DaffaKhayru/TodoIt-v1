import React from 'react';
import useEditTodo from '../store/useEditTodo';

const Card = () => {
    const {toggleEditTodo} = useEditTodo();

    return (
        <div onClick={toggleEditTodo} className='bg-white items-center gap-5 cursor-pointer py-2 px-4 flex rounded-sm '>
            <input type="checkbox" />
            
            <div>
                <h1>Title</h1>
                <p>2 march 2025</p>
            </div>
        </div>
    );
}

export default Card;
