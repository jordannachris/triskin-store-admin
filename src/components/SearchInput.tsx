import React from "react";

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Buscar..."}
            className="w-full px-4 py-2 rounded-lg border border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 text-gray-700"
        />
    );
};

export default SearchInput;