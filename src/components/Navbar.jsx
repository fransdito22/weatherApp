import React from "react";
import { GiPositionMarker } from "react-icons/gi";

    const Navbar = ({ city, setCity, handleOnSubmit, location }) => (
    <div className="navbar  bg-black bg-opacity-80 p-4">
        <div className="flex-1">
        <a className="btn btn-ghost text-xl ml-10">Weather App</a>
        </div>
        <div className="flex-end">
        <p className="mt-3 text-center">
            <GiPositionMarker className="inline mx-1" />
            {location || "Kota tidak ditemukan"}
        </p>
        </div>
        <div className="flex-none gap-2 mt-3">
        <div className="form-control">
            <form onSubmit={handleOnSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Masukkan Kota"
                required
                className="rounded-lg px-5 py-1 mx-3"
            />
            <button
                type="submit"
                className="btn btn-outline btn-sm btn-success rounded-lg px-5 mr-10"
            >
                Cari
            </button>
            </form>
        </div>
        </div>
    </div>
    );

export default Navbar;
