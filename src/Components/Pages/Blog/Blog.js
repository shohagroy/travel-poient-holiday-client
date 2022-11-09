import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="bg-gray-200">
      <Helmet>
        <title>Blog -Travel Point Holiday</title>
      </Helmet>
      <section className="max-w-[1200px] min-h-[700px] m-auto p-5 md:p-20 bg-gray-200 text-gray-900">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Assignment Question
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-10 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Difference between SQL and NoSQL Database ?
              </summary>

              <div className="px-4 pb-4">
                <div className="md:grid grid-cols-2 gap-2 w-full">
                  <div>
                    <h3 className="text-xl font-semibold">SQL Database</h3>
                    <ol>
                      <li>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </li>
                      <li>
                        2. These databases have fixed or static or predefined
                        schema
                      </li>
                      <li>
                        3. These databases are not suited for hierarchical data
                        storage.
                      </li>
                      <li></li>
                      <li>5. Vertically Scalable </li>
                      <li>6. Follows ACID property </li>
                    </ol>
                    <p>
                      <strong>Examples:</strong> MySQL, PostgreSQL, Oracle,
                      MS-SQL Server etc
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">NoSQL Database</h3>
                    <ol>
                      <li>1. Non-relational or distributed database system.</li>
                      <li>2. They have dynamic schema</li>
                      <li>
                        3. These databases are best suited for hierarchical data
                        storage.
                      </li>
                      <li>
                        4. These databases are not so good for complex queries
                      </li>
                      <li>5. Horizontally scalable</li>
                      <li>
                        6. Follows CAP(consistency, availability, partition
                        tolerance)
                      </li>
                    </ol>
                    <p>
                      <strong>Examples:</strong> MongoDB, GraphQL, HBase, Neo4j,
                      Cassandra etc
                    </p>
                  </div>
                </div>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is JWT, and how does it work?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  <strong>What Is JWT?</strong>
                </p>
                <p>
                  JWT, or JSON Web Token, is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued.
                </p>
                <p>
                  <strong>How JWT Works</strong>
                </p>
                <p>
                  JWTs differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted. A JWT is a string made up of three parts,
                  separated by dots (.), and serialized using base64. In the
                  most common serialization format, compact serialization, the
                  JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the difference between javascript and NodeJS?
              </summary>

              <div className="px-4 pb-4">
                <div className="md:grid grid-cols-2 gap-2 w-full">
                  <div>
                    <h3 className="text-xl font-semibold">JavaScript</h3>
                    <ol>
                      <li>
                        1. Javascript is a programming language that is used for
                        writing scripts on the website.
                      </li>
                      <li>2. Javascript can only be run in the browsers.</li>
                      <li>3. It is basically used on the client-side. </li>
                      <li>
                        4. Javascript is capable enough to add HTML and play
                        with the DOM.
                      </li>
                      <li>
                        5. Javascript can run in any browser engine as like JS
                        core in safari and Spidermonkey in Firefox.
                      </li>
                      <li>6. Javascript is used in frontend development. </li>
                      <li>
                        7. Some of the javascript frameworks are RamdaJS,
                        TypedJS, etc.
                      </li>
                      <li>
                        8. It is the upgraded version of ECMA script that uses
                        Chrome’s V8 engine written in C++.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">NodeJS</h3>
                    <ol>
                      <li>1. NodeJS is a Javascript runtime environment.</li>
                      <li>
                        2. We can run Javascript outside the browser with the
                        help of NodeJS.
                      </li>
                      <li>3. It is mostly used on the server-side.</li>
                      <li>
                        4. Nodejs does not have capability to add HTML tags.
                      </li>
                      <li>
                        5. V8 is the Javascript engine inside of node.js that
                        parses and runs Javascript.
                      </li>
                      <li>6. Nodejs is used in server-side development.</li>
                      <li>
                        7. Some of the Nodejs modules are Lodash, express etc.
                        These modules are to be imported from npm.
                      </li>
                      <li>8. Nodejs is written in C, C++ and Javascript.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does NodeJS handle multiple requests at the same time?
              </summary>

              <div className="px-4 pb-4">
                <div>
                  <p>
                    We know NodeJS application is single-threaded. Say, if
                    processing involves request A that takes 10 seconds, it does
                    not mean that a request which comes after this request needs
                    to wait 10 seconds to start processing because NodeJS event
                    loops are only single-threaded. The entire NodeJS
                    architecture is not single-threaded.
                  </p>
                  <h3 className="text-xl font-semibold mt-3">
                    How NodeJS handle multiple client requests?
                  </h3>
                  <p className="my-2">
                    NodeJS receives multiple client requests and places them
                    into EventQueue. NodeJS is built with the concept of
                    event-driven architecture. NodeJS has its own EventLoop
                    which is an infinite loop that receives requests and
                    processes them. EventLoop is the listener for the
                    EventQueue.
                  </p>
                  <p>
                    If NodeJS can process the request without I/O blocking then
                    the event loop would itself process the request and sends
                    the response back to the client by itself. But, it is
                    possible to process multiple requests parallelly using the
                    NodeJS cluster module or worker_threads module.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
