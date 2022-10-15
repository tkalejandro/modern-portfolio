## TypeScript Component Base

```
import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title, subtitle } : TitleProps) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default Title;

```