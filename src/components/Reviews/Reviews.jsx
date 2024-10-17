import React from "react"

const Reviews = () => {
    return (
        <section className="my-20">
            <h1 className="text-left text-3xl">Reviews</h1>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2">
                <div className="mb-5">
                    <div className="mb-3 flex place-items-center">
                        <h1 className="text-4xl">5.0</h1>
                        <div className="rating ml-5">
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                        </div>
                    </div>
                    <h1 className="text-left text-xl">1243 reviews</h1>
                </div>
                <div className="flex flex-col">
                    <div className="rating flex place-items-center">
                        <h1 className="text-2xl">5</h1>
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 ml-2 bg-orange-400"
                        />
                        <progress
                            className="w-100 progress progress-secondary ml-5"
                            value="5"
                            max="5"
                        ></progress>
                        <h1 className="ml-5 text-2xl">5</h1>
                    </div>
                    <div className="rating flex place-items-center">
                        <h1 className="text-2xl">4</h1>
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 ml-2 bg-orange-400"
                        />
                        <progress
                            className="w-100 progress progress-secondary ml-5"
                            value="5"
                            max="5"
                        ></progress>
                        <h1 className="ml-5 text-2xl">5</h1>
                    </div>
                    <div className="rating flex place-items-center">
                        <h1 className="text-2xl">3</h1>
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 ml-2 bg-orange-400"
                        />
                        <progress
                            className="w-100 progress progress-secondary ml-5"
                            value="5"
                            max="5"
                        ></progress>
                        <h1 className="ml-5 text-2xl">5</h1>
                    </div>
                    <div className="rating flex place-items-center">
                        <h1 className="text-2xl">2</h1>
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 ml-2 bg-orange-400"
                        />
                        <progress
                            className="w-100 progress progress-secondary ml-5"
                            value="5"
                            max="5"
                        ></progress>
                        <h1 className="ml-5 text-2xl">5</h1>
                    </div>
                    <div className="rating flex place-items-center">
                        <h1 className="text-2xl">1</h1>
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 ml-2 bg-orange-400"
                        />
                        <progress
                            className="w-100 progress progress-secondary ml-5"
                            value="5"
                            max="5"
                        ></progress>
                        <h1 className="ml-5 text-2xl">5</h1>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <div className="flex place-items-center">
                    <div className="rating">
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <h1 className="ml-3 text-2xl">Fantastic experience</h1>
                </div>
                <h1 className="my-3 text-left text-xl">User_Name, date</h1>
                <p className="text-left text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt consequuntur. Odio hic aut eligendi eos
                    eaque vitae, nulla quod?
                </p>
            </div>
            <div className="my-10">
                <div className="flex place-items-center">
                    <div className="rating">
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <h1 className="ml-3 text-2xl">Fantastic experience</h1>
                </div>
                <h1 className="my-3 text-left text-xl">User_Name, date</h1>
                <p className="text-left text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Inventore, sunt consequuntur. Odio hic aut eligendi eos
                    eaque vitae, nulla quod?
                </p>
            </div>
        </section>
    )
}

export default Reviews
