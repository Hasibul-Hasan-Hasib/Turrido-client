import React from 'react';

const Reviews = () => {
    return (
        <div className='flex justify-between my-10'>
            <div>
                <div className='flex place-items-center mb-5'>
                    <h1 className='text-4xl'>5.0</h1>
                    <div className="rating ml-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <h1 className='text-left text-xl'>1243 reviews</h1>
            </div>
            <div className='flex flex-col'>
                <div className='rating flex place-items-center'>
                    <h1 className='text-2xl'>5</h1>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 ml-2" />
                    <progress className="progress progress-secondary w-64 ml-5" value="5" max="5"></progress>
                    <h1 className='text-2xl ml-5'>5</h1>
                </div>
                <div className='rating flex place-items-center'>
                    <h1 className='text-2xl'>4</h1>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 ml-2" />
                    <progress className="progress progress-secondary w-64 ml-5" value="5" max="5"></progress>
                    <h1 className='text-2xl ml-5'>5</h1>
                </div>
                <div className='rating flex place-items-center'>
                    <h1 className='text-2xl'>3</h1>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 ml-2" />
                    <progress className="progress progress-secondary w-64 ml-5" value="5" max="5"></progress>
                    <h1 className='text-2xl ml-5'>5</h1>
                </div>
                <div className='rating flex place-items-center'>
                    <h1 className='text-2xl'>2</h1>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 ml-2" />
                    <progress className="progress progress-secondary w-64 ml-5" value="5" max="5"></progress>
                    <h1 className='text-2xl ml-5'>5</h1>
                </div>
                <div className='rating flex place-items-center'>
                    <h1 className='text-2xl'>1</h1>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 ml-2" />
                    <progress className="progress progress-secondary w-64 ml-5" value="5" max="5"></progress>
                    <h1 className='text-2xl ml-5'>5</h1>
                </div>
            </div>











            


        </div>
    );
};

export default Reviews;