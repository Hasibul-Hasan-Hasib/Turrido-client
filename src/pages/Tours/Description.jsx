import React from "react"
import { IconArrowNarrowRight, IconCheck } from "@tabler/icons"

const Description = () => {

    return (
        <div className="rounded-lg bg-base-300 p-10 text-left">
            <h1 className="text-left text-2xl">Overview</h1>
            <p className="my-5 text-left leading-7">
                Cozy little cottage(10m2)by the sea. The cabin contains
                everything you need for sleeping and cooking. It is a outdoor
                compost toilet in the cabin. Parking for car is 50-60m away from
                the cabin. There is no water in the house, in the summer there
                is a garden hose outside. In the winter there is 25 liters
                available in the cabin, but we live right on the top so it can
                be picked up more when needed . . .
                <label
                    htmlFor="my-modal-3"
                    className="link ml-1 inline text-secondary"
                >
                    Read More
                </label>
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative bg-gray-800">
                        <label
                            htmlFor="my-modal-3"
                            className="btn-sm btn-circle btn absolute right-2 top-2"
                        >
                            X
                        </label>
                        <label className="text-left text-2xl">About</label>
                        <p className="my-5 text-left leading-7">
                            Cozy little cottage(10m2)by the sea. The cabin
                            contains everything you need for sleeping and
                            cooking. It is a outdoor compost toilet in the
                            cabin. Parking for car is 50-60m away from the
                            cabin. There is no water in the house, in the summer
                            there is a garden hose outside. In the winter there
                            is 25 liters available in the cabin, but we live
                            right on the top so it can be picked up more when
                            needed.
                            <br />
                            The outdoor shower is heated by the sun and doesnt
                            work in the winter. Recommended to have a car. The
                            space Location about 30km from Tromso, on a place
                            called "Kvaloya". Near "Hella", that is a popular
                            fishingplace.
                            <br />
                            Other things to note Fantastic location, the cabin
                            is completely down the sea. No one living in the
                            vicinity, so you can turn off the lights and look at
                            the boats that pass by, the northern lights in the
                            sky and maybe a reindeer right outside the window.
                            The cabin is 33km from the city center and 27km from
                            the airport.
                            <br />
                            Recommended to have a car to get to the cabin and
                            also around. Bus is route 420 with 7-8 departures
                            every weekday, almost no buses in the weekends.
                        </p>
                    </div>
                </div>
            </p>

            <div className="divider"></div>

            {/* included */}

            <div tabIndex={0} className="collapse-arrow collapse">
                <input type="checkbox" />
                <h1 className="collapse-title mb-3 text-2xl">
                    What's Included
                </h1>
                <div className="collapse-content grid grid-cols-2">
                    <ul className="list-inside text-left">
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                    </ul>
                    <ul className="list-inside text-left">
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconCheck size={30} className="mr-2" /> 10m² cabin
                        </li>
                    </ul>
                    <label
                        htmlFor="my-modal-5"
                        className="link ml-1 mt-5 text-secondary"
                    >
                        Read {5} More
                    </label>
                    <input
                        type="checkbox"
                        id="my-modal-5"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box relative bg-gray-800">
                            <label
                                htmlFor="my-modal-5"
                                className="btn-sm btn-circle btn absolute right-2 top-2"
                            >
                                X
                            </label>
                            <label className="text-left text-2xl">
                                Whats included
                            </label>
                            <div className="grid grid-cols-2">
                                <ul className="mt-5 list-inside text-left">
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                </ul>
                                <ul className="mt-5 list-inside text-left">
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconCheck size={30} className="mr-2" />{" "}
                                        10m² cabin
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            {/* Pick up */}

            <div tabIndex={0} className="collapse-arrow collapse">
                <input type="checkbox" />
                <h1 className="collapse-title mb-3 text-2xl">Pick Up</h1>
                <div className="collapse-content">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full max-w-md"
                    />
                    <button className="btn-primary btn-md btn mt-3 xl:ml-3">
                        {" "}
                        Submit
                    </button>
                    <p className="mt-3">Submit a pickup place you like </p>
                </div>
            </div>

            <div className="divider"></div>

            <div tabIndex={0} className="collapse-arrow collapse">
                <input type="checkbox" />
                <h1 className="collapse-title mb-3 text-2xl">Tour Plan</h1>
                <div className="collapse-content">
                    <p className="leading-7">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Placeat voluptatem commodi magnam similique
                        repellat repellendus facere hic quisquam amet
                        architecto, excepturi adipisci ex modi nemo eaque
                        reiciendis accusantium! Voluptatem fugit cumque tenetur?
                        Dolorem nihil quis voluptate perspiciatis, neque dolores
                        beatae! Exercitationem est doloremque culpa odit animi
                        numquam delectus veritatis voluptatibus!
                    </p>
                    <ul className="step-primary steps steps-vertical mt-5 leading-7">
                        <li className="step">
                            <p className="py-3 text-left">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis sapiente earum
                                eveniet, numquam fuga magni maxime pariatur
                                adipisci nisi eaque? Necessitatibus aperiam modi
                                molestias blanditiis dolorum veniam similique,
                                ab provident?
                            </p>
                        </li>
                        <li className="step">
                            <p className="py-3 text-left">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis sapiente earum
                                eveniet, numquam fuga magni maxime pariatur
                                adipisci nisi eaque? Necessitatibus aperiam modi
                                molestias blanditiis dolorum veniam similique,
                                ab provident?
                            </p>
                        </li>
                        <li className="step">
                            <p className="py-3 text-left">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis sapiente earum
                                eveniet, numquam fuga magni maxime pariatur
                                adipisci nisi eaque? Necessitatibus aperiam modi
                                molestias blanditiis dolorum veniam similique,
                                ab provident?
                            </p>
                        </li>
                        <li className="step">
                            <p className="py-3 text-left">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis sapiente earum
                                eveniet, numquam fuga magni maxime pariatur
                                adipisci nisi eaque? Necessitatibus aperiam modi
                                molestias blanditiis dolorum veniam similique,
                                ab provident?
                            </p>
                        </li>
                        <li className="step">
                            <p className="py-3 text-left">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis sapiente earum
                                eveniet, numquam fuga magni maxime pariatur
                                adipisci nisi eaque? Necessitatibus aperiam modi
                                molestias blanditiis dolorum veniam similique,
                                ab provident?
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="divider"></div>

            <div tabIndex={0} className="collapse-arrow collapse">
                <input type="checkbox" />
                <h1 className="collapse-title mb-3 text-2xl">
                    Additional Info
                </h1>
                <div className="collapse-content grid grid-cols-2">
                    <ul className="list-inside text-left">
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                    </ul>
                    <ul className="list-inside text-left">
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                        <li className="flex text-xl">
                            <IconArrowNarrowRight size={30} className="mr-2" />{" "}
                            10m² cabin
                        </li>
                    </ul>
                    <label
                        htmlFor="my-modal-6"
                        className="link ml-1 mt-5 text-secondary"
                    >
                        Read {5} More
                    </label>
                    <input
                        type="checkbox"
                        id="my-modal-6"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box relative bg-gray-800">
                            <label
                                htmlFor="my-modal-6"
                                className="btn-sm btn-circle btn absolute right-2 top-2"
                            >
                                X
                            </label>
                            <label className="text-left text-2xl">
                                Additional Info
                            </label>
                            <div className="grid grid-cols-2">
                                <ul className="mt-5 list-inside text-left">
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                </ul>
                                <ul className="mt-5 list-inside text-left">
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                    <li className="flex text-xl">
                                        <IconArrowNarrowRight
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        10m² cabin
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
