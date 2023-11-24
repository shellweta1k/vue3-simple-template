/// <reference types="vite/client" />
declare type defaultObj = {
  [key: string]: any;
};

declare type formItem = {
  key: string;
  label: string;
  type: string;
  placeholder: string;
  [key: string]: any;
  config: {
    [key: string]: any;
  };
};
