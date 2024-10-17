import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="my-6 md:grid md:max-w-full md:grid-cols-3 md:gap-x-8">
                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                </div>
                <div className="hidden lg:grid md:grid-cols-1 md:gap-y-8">
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                        <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                </div>
                <div className="hidden aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg md:aspect-w-3 md:aspect-h-4 lg:block">
                    <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                </div>
            </div>



            <div className="carousel carousel-center rounded-box space-x-4 lg:hidden">
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        className="rounded-box w-full" />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        className="rounded-box " />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        className="rounded-box " />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        className="rounded-box " />
                </div>
                <div className="carousel-item w-4/5 md:w-2/5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        className="rounded-box" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;