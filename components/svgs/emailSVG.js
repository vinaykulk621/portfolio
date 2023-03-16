import React from "react";
export function EmailSVG({}) {
  return <div className="has-tooltip">
                  <span className="tooltip -mt-8 rounded bg-black p-1 text-xl text-white">
                    kulkarnivinay621@gmail.com{" "}
                  </span>
                  <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:kulkarnivinay621@gmail.com">
                    <span className="sr-only">mail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-6 w-6 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
                      <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"></path>
                      <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"></path>
                    </svg>
                  </a>
                </div>;
}
  