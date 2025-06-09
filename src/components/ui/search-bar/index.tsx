"use client";

import React, { useMemo, useState } from "react";

import { cn } from "@/utils/classname";
import { debounce } from "@/utils/input";

import styles from "./main.module.css";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChange: (e: any) => void;
  name?: string;
  className?: string;
};

const SearchBar = ({
  placeholder,
  value,
  onChange,
  name,
  className,
}: SearchBarProps) => {
  const [search, setSearch] = useState(value || "");

  const debouncedOnChange = useMemo(() => {
    return debounce(onChange, 300);
  }, [onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedOnChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={handleChange}
      name={name || "search"}
      className={cn(styles.inputClassName, className)}
    />
  );
};

export default SearchBar;
