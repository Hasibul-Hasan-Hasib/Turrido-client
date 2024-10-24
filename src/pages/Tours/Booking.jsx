import React, { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"

const Booking = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null,
    })

    console.log(value)

    return (
        <div className="sticky top-32 mb-20 grid bg-base-300 shadow-md shadow-secondary border border-secondary-focus rounded-lg p-10">
            <h1 className="mb-3 text-left text-3xl">$ 230</h1>
            <Datepicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                showShortcuts={true}
            />
            <div className="my-3">
                <input
                    type="time"
                    placeholder="Type here"
                    className="input-bordered input w-full"
                />
                <input
                    type="number"
                    placeholder="Type here"
                    className="input-bordered input my-3 w-full"
                />
            </div>
            <button className="btn-primary btn font-bold text-white">
                Reserve
            </button>
        </div>
    )
}

export default Booking
