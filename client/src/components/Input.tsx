import React from "react";

export const Input = ({
  label,
  state,
  setState,
}: {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="border border-gray-200 bg-white p-4 rounded-xl focus-within:text-violet-800 focus-within:outline-white"
      type="text"
      title={label}
      value={state}
      placeholder={label}
      onChange={(e) => setState(e.target.value)}
    />
  );
};
