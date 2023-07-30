import React from 'react';
import SearchInput from './SearchInput';

type InputProps = {
  type: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
};

interface InputPropsComponent extends InputProps {
  className?: string;
}

const Input: React.FC<InputPropsComponent> = ({ type, className }) => {
  switch (type) {
    case 'text':
      return (
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      );
    case 'search':
      return <SearchInput />
    default:
      return null;
  }
};

export { Input };
