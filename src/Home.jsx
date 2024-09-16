import React from "react";
import { Link } from "react-router-dom";
import routes from "./index.routes";

const Button = ({ url }) => {
  return (
    <Link to={url}>
      <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Dark
      </button>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="flex items-center flex-col h-full">
      <div className="relative overflow-x-auto w-3/4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.no
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {routes
              .filter((item) => item.category === "GSAP")
              .map((singleItem, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index + "gsap"}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{singleItem.category}</td>
                  <td className="px-6 py-4">{singleItem.componet}</td>
                  <td className=" ">
                    <Button url={singleItem.route} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <br />

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.no
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {routes
              .filter((item) => item.category === "THREE")
              .map((singleItem, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index + "three"}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{singleItem.category}</td>
                  <td className="px-6 py-4">{singleItem.componet}</td>
                  <td className=" ">
                    <Button url={singleItem.route} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <br />

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase   dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.no
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {routes
              .filter((item) => item.category === "RAPIER")
              .map((singleItem, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index + "Rapier"}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{singleItem.category}</td>
                  <td className="px-6 py-4">{singleItem.componet}</td>
                  <td className=" ">
                    <Button url={singleItem.route} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
