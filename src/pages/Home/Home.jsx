import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home(props) {
    return (
        <main className="Home">
            <Helmet>
              <title>
                  {props.title}
              </title>
            </Helmet>
            HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT HOME CONTENT
        </main>
    )
}
