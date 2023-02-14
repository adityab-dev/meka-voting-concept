import React from "react";

export type candidate = {
  name: string;
  affiliation: string;
  age: number;
  education: string;
  logo: string;
};

export type OnChange = React.ChangeEvent<HTMLInputElement>;
