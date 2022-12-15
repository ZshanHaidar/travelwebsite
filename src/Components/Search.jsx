import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly ">
        <div>
          <h2>LAXURY INCLUDED VACTIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            adipisci tempora ipsum laudantium rerum voluptas praesentium
            voluptates, suscipit minima voluptatibus cupiditate labore aliquam
            odit? Facere fugiat autem neque dolores fuga nam facilis hic earum
            ullam voluptate doloremque quos corrupti, minima eligendi ea nemo
            officia explicabo ex aut iste harum eveniet dicta! Soluta modi
            perspiciatis, nobis repellat error non nesciunt totam nihil cum amet
            sed iure nulla. Quasi doloribus illo odit, inventore, dolorem velit
            expedita incidunt repellendus assumenda corporis ullam vero ipsum
            delectus ad rerum officia. Eligendi a suscipit consectetur quasi.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col lg:flex-row items-center text-center">
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div>
                <h3 className="uppercase py-2">leading service</h3>
                <p className="uppercase py-1">
                  all-inclusive company for 220 years in-a-row
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-center">
              <button>
                <MdTravelExplore size={50} />
              </button>
              <div>
                <h3 className="uppercase py-2">leading service</h3>
                <p className="uppercase py-1">
                  all-inclusive company for 220 years in-a-row
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p>GET AN ADDITIONAL 20% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2 ">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigua</option>
              <option>Grand Key West</option>
              <option>Grand Maldives</option>
              <option>Grand Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div>
            <button className="w-full my-4">
            Rates & Availabilites</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
