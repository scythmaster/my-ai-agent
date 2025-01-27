// Input.tsx
'use client'

import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border p-2 rounded w-full ${className}`}
      {...props}
    />
  );
};
