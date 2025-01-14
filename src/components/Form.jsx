import React, { useState } from "react";
import data from "../assets/data/country-currency.json";
import down from "../assets/image/down.svg";
import close from "../assets/image/close.svg";
import leftRight from "../assets/image/left-right.svg";

function Form() {
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [selectedCountryFrom, setSelectedCountryFrom] = useState(data[0]);
  const [selectedCountryTo, setSelectedCountryTo] = useState(data[1]);
  const [amount, setAmount] = useState("");

  function handleFrom() {
    setFromOpen(!fromOpen);
  }

  function handleTo() {
    setToOpen(!toOpen);
  }

  function handleSelectedFrom(e) {
    setSelectedCountryFrom(data[e.target.getAttribute("data-id")]);
    setFromOpen(false); // Close dropdown after selection
  }

  function handleSelectedTo(e) {
    setSelectedCountryTo(data[e.target.getAttribute("data-id")]);
    setToOpen(false); // Close dropdown after selection
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div className="shadow-lg w-full sm:w-3/4 rounded-md">
      <div className="form-header rounded-t-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden bg-neutral-100">
        <h3 className="text-center text-2xl py-2 cursor-pointer hover:bg-white">
          Convert
        </h3>
        <h3 className="text-center text-2xl py-2 cursor-pointer hover:bg-white">
          Send
        </h3>
        <h3 className="text-center text-2xl py-2 cursor-pointer hover:bg-white">
          Charts
        </h3>
        <h3 className="text-center text-2xl py-2 cursor-pointer hover:bg-white">
          Alerts
        </h3>
      </div>
      <div className="form-main p-10 grid gap-1 grid-cols-1 sm:grid-cols-2 sm:gap-2 xl:grid-cols-4 xl:gap-3">
        <div className="amount flex flex-col gap-2">
          <label className="text-xl">Amount</label>
          <input
            type="text"
            className="border focus:border-none outline-blue-500 outline-1 rounded p-3"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>

        <div className="from flex flex-col gap-2">
          <label className="text-xl">From</label>
          <div onClick={handleFrom} className="fromSelect mt-1 relative">
            {!fromOpen && (
              <div className="show-selected-from flex justify-between w-80 items-center cursor-pointer border focus:border-none outline-blue-500 outline-1 rounded p-3 py-3">
                <div className="flex gap-2 items-center">
                  <img
                    src={selectedCountryFrom?.flag}
                    alt={selectedCountryFrom?.name}
                    className="w-6 h-6"
                  />
                  <span>
                    {selectedCountryFrom?.currencies && (
                      <>
                        {Object.keys(selectedCountryFrom?.currencies)} -{" "}
                        {
                          selectedCountryFrom?.currencies[
                            Object.keys(selectedCountryFrom?.currencies)[0]
                          ].name
                        }
                      </>
                    )}
                  </span>
                </div>
                <img src={down} className="w-5 h-5" alt="" />
              </div>
            )}
            {fromOpen && (
              <>
                <div className="selectSearch flex justify-between w-80 items-center cursor-pointer border focus:border-none outline-blue-500 outline-1 rounded p-3 py-3">
                  <input
                    type="text"
                    className="border-none focus:outline-none"
                    placeholder="Type to search..."
                  />
                  <img src={close} className="w-5 h-5" alt="" />
                </div>
                <ul className="flex flex-col h-72 overflow-y-scroll absolute w-80 mt-2 bg-white shadow-md">
                  {data.map((country, index) => (
                    <li
                      data-id={index}
                      key={index}
                      className="flex justify-between p-2 items-center cursor-pointer hover:bg-slate-100"
                      onClick={handleSelectedFrom}
                    >
                      <div className="flex gap-2 items-center">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-6"
                        />
                        {country.currencies && (
                          <span>
                            {Object.keys(country?.currencies)} -{" "}
                            {Object.values(country?.currencies)[0].name}{" "}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="leftRight border w-12 h-12 flex justify-center items-center rounded-full cursor-pointer mt-8 ms-16">
          <img src={leftRight} className="w-6 h-6" alt="" />
        </div>

        <div className="to flex flex-col gap-2 -ms-12">
          <label className="text-xl">To</label>
          <div onClick={handleTo} className="fromSelect mt-1 relative">
            {!toOpen && (
              <div className="show-selected-to flex justify-between w-80 items-center cursor-pointer border focus:border-none outline-blue-500 outline-1 rounded p-3 py-3">
                <div className="flex gap-2 items-center">
                  <img
                    src={selectedCountryTo?.flag}
                    alt={selectedCountryTo?.name}
                    className="w-6 h-6"
                  />
                  <span>
                    {selectedCountryTo?.currencies && (
                      <>
                        {Object.keys(selectedCountryTo?.currencies)} -{" "}
                        {
                          selectedCountryTo?.currencies[
                            Object.keys(selectedCountryTo?.currencies)[0]
                          ].name
                        }
                      </>
                    )}
                  </span>
                </div>
                <img src={down} className="w-5 h-5" alt="" />
              </div>
            )}
            {toOpen && (
              <>
                <div className="selectSearch flex justify-between w-80 items-center cursor-pointer border focus:border-none outline-blue-500 outline-1 rounded p-3 py-3">
                  <input
                    type="text"
                    className="border-none focus:outline-none"
                    placeholder="Type to search..."
                  />
                  <img src={close} className="w-5 h-5" alt="" />
                </div>
                <ul className="flex flex-col h-72 overflow-y-scroll absolute w-80 mt-2 bg-white shadow-md">
                  {data.map((country, index) => (
                    <li
                      data-id={index}
                      key={index}
                      className="flex justify-between p-2 items-center cursor-pointer hover:bg-slate-100"
                      onClick={handleSelectedTo}
                    >
                      <div className="flex gap-2 items-center">
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-6"
                        />
                        {country.currencies && (
                          <span>
                            {Object.keys(country?.currencies)} -{" "}
                            {Object.values(country?.currencies)[0].name}{" "}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="form-footer flex justify-between items-center p-10">
        <button className="btn btn-outline btn-info bg-blue-500 py-3 px-8 font-medium hover:bg-blue-600 rounded-md text-white">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Form;
