import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="text-2xl cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-full border-blue-600 border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2">
{text}
</button>

    );
};

export default Button;
