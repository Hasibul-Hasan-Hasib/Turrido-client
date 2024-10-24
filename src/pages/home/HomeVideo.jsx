import React from 'react';
import ReactPlayer from "react-player"
import { Button, Container, Grid } from '@mantine/core';


const HomeVideo = () => {
    return (
        <div className='mt-48 mb-36'>
            <Grid justify='space-between' align='center' >
                <Grid.Col span={12} md={5} className='flex flex-col items-start'>
                    <h1 className='text-4xl font-bold text-white text-left'>Our Customer Always Come First</h1>
                    <p className='text-left my-6'>Utilizing his exceptional experience and knowledge
                        of the luxury waterfront markets, Roland serves an
                        extensive and elite worldwide client base. He enjoy
                        a reputation as a tenacious Broker.</p>
                    <button className='btn btn-secondary text-white'>View Reviews</button>
                </Grid.Col>
                <Grid.Col span={12} md={6} className='aspect-video'>
                    <ReactPlayer
                        width='100%'
                        height='100%'
                        url="https://www.youtube.com/watch?v=9gXOBEgHaUM"
                    />
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default HomeVideo;