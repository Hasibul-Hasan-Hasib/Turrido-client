import React from 'react';
import { IconArrowNarrowRight, IconCheck } from '@tabler/icons'



const Description = () => {




    return (
        <div className='bg-gray-800 rounded-lg p-10 text-left'>

            <h1 className='text-left text-2xl'>Overview</h1>
            <p className='text-left my-5 leading-7'>
                Cozy little cottage(10m2)by the sea. The cabin contains everything you need for sleeping and cooking. It is a outdoor compost toilet in the cabin.
                Parking for car is 50-60m away from the cabin.
                There is no water in the house, in the summer there is a garden hose outside.
                In the winter there is 25 liters available in the cabin, but we live right on the top so it can be picked up more when needed . . .
                <label htmlFor="my-modal-3" className="link text-secondary inline ml-1">Read More</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative bg-gray-800">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                        <label className='text-left text-2xl'>About</label>
                        <p className='text-left my-5 leading-7'>
                            Cozy little cottage(10m2)by the sea. The cabin contains everything you need for sleeping and cooking. It is a outdoor compost toilet in the cabin.
                            Parking for car is 50-60m away from the cabin.
                            There is no water in the house, in the summer there is a garden hose outside.
                            In the winter there is 25 liters available in the cabin, but we live right on the top so it can be picked up more when needed.
                            <br />
                            The outdoor shower is heated by the sun and doesnt work in the winter.
                            Recommended to have a car.
                            The space
                            Location about 30km from Tromso, on a place called "Kvaloya". Near "Hella", that is a popular fishingplace.
                            <br />
                            Other things to note
                            Fantastic location, the cabin is completely down the sea. No one living in the vicinity, so you can turn off the lights and look at the boats that pass by, the northern lights in the sky and maybe a reindeer right outside the window.

                            The cabin is 33km from the city center and 27km from the airport.
                            <br />
                            Recommended to have a car to get to the cabin and also around. Bus is route 420 with 7-8 departures every weekday, almost no buses in the weekends.
                        </p>
                    </div>
                </div>
            </p>





            <div className='divider'></div>







            {/* included */}



            <div tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                <h1 className='text-2xl collapse-title mb-3'>What's Included</h1>
                <div className='grid grid-cols-2 collapse-content '>
                    <ul className='text-left list-inside'>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                    </ul>
                    <ul className='text-left list-inside'>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                    </ul>
                    <label htmlFor="my-modal-5" className="link text-secondary ml-1 mt-5">Read {5} More</label>
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative bg-gray-800">
                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                            <label className='text-left text-2xl'>Whats included</label>
                            <div className='grid grid-cols-2'>
                                <ul className='text-left list-inside mt-5'>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                </ul>
                                <ul className='text-left list-inside mt-5'>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconCheck size={30} className='mr-2' /> 10m² cabin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className='divider'></div>




            {/* Pick up */}

            <div tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                <h1 className='text-2xl collapse-title mb-3'>Pick Up</h1>
                <div className='collapse-content'>
                    <input type="text" placeholder="Type here" className="input w-full max-w-md" />
                    <button className='btn btn-md btn-primary xl:ml-3 mt-3'> Submit</button>
                    <p className='mt-3'>Submit a pickup place you like </p>
                </div>
            </div>




            <div className='divider'></div>



            <div tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                <h1 className='text-2xl collapse-title mb-3'>Tour Plan</h1>
                <div className='collapse-content'>
                    <p className='leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptatem commodi magnam similique repellat repellendus facere hic quisquam amet architecto, excepturi adipisci ex modi nemo eaque reiciendis accusantium! Voluptatem fugit cumque tenetur? Dolorem nihil quis voluptate perspiciatis, neque dolores beatae! Exercitationem est doloremque culpa odit animi numquam delectus veritatis voluptatibus!</p>
                    <ul className="steps steps-vertical step-primary mt-5 leading-7">
                        <li className="step"><p className='text-left py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente earum eveniet, numquam fuga magni maxime pariatur adipisci nisi eaque? Necessitatibus aperiam modi molestias blanditiis dolorum veniam similique, ab provident?</p></li>
                        <li className="step"><p className='text-left py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente earum eveniet, numquam fuga magni maxime pariatur adipisci nisi eaque? Necessitatibus aperiam modi molestias blanditiis dolorum veniam similique, ab provident?</p></li>
                        <li className="step"><p className='text-left py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente earum eveniet, numquam fuga magni maxime pariatur adipisci nisi eaque? Necessitatibus aperiam modi molestias blanditiis dolorum veniam similique, ab provident?</p></li>
                        <li className="step"><p className='text-left py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente earum eveniet, numquam fuga magni maxime pariatur adipisci nisi eaque? Necessitatibus aperiam modi molestias blanditiis dolorum veniam similique, ab provident?</p></li>
                        <li className="step"><p className='text-left py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis sapiente earum eveniet, numquam fuga magni maxime pariatur adipisci nisi eaque? Necessitatibus aperiam modi molestias blanditiis dolorum veniam similique, ab provident?</p></li>
                    </ul>
                </div>
            </div>




            <div className='divider'></div>





            <div tabIndex={0} className="collapse collapse-arrow">
                <input type="checkbox" />
                <h1 className='text-2xl collapse-title mb-3'>Additional Info</h1>
                <div className='grid grid-cols-2 collapse-content '>
                    <ul className='text-left list-inside'>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                    </ul>
                    <ul className='text-left list-inside'>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                        <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                    </ul>
                    <label htmlFor="my-modal-6" className="link text-secondary ml-1 mt-5">Read {5} More</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative bg-gray-800">
                            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                            <label className='text-left text-2xl'>Additional Info</label>
                            <div className='grid grid-cols-2'>
                                <ul className='text-left list-inside mt-5'>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                </ul>
                                <ul className='text-left list-inside mt-5'>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                    <li className='flex text-xl'><IconArrowNarrowRight size={30} className='mr-2' /> 10m² cabin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Description;