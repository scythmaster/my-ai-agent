// Card.tsx
'use client'
import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow ${className}`}>{children}</div>
  );
};

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};