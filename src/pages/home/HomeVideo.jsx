import React from 'react';
import ReactPlayer from "react-player"
import { Button, Container, Grid } from '@mantine/core';


const HomeVideo = () => {
    return (
        <Container size='lg' className='my-24'>
            <Grid className='flex items-center justify-between' >
                <Grid.Col span={12} md={5} className='flex flex-col items-start'>
                    <h1 className='text-4xl font-bold text-white text-left'>Our Customer Always Come First</h1>
                    <p className='text-left my-6'>Utilizing his exceptional experience and knowledge
                        of the luxury waterfront markets, Roland serves an
                        extensive and elite worldwide client base. He enjoy
                        a reputation as a tenacious Broker.</p>
                    <button className='btn btn-secondary text-white'>View Reviews</button>
                </Grid.Col>
                <Grid.Col span={12} md={6}>
                    <ReactPlayer
                        width='100%'
                        className="aspect-video"
                        url="https://www.youtube.com/watch?v=9gXOBEgHaUM"
                    />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default HomeVideo;