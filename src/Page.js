// Page.js
import React from 'react';

const Page = ({ title, content }) => {
  return (
    <main>
      <h2>{title}</h2>
      <p>{content}</p>
    </main>
  );
};

export default Page;
