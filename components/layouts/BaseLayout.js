import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

// There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element.

const BaseLayout = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Head></Head>
      <div>
        <div className="layout-container">
          <Header></Header>
          <main className={`cover `}>
            <div className="wrapper">{children}</div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
