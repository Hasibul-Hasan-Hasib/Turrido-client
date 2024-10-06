import React from 'react';
import { Grid, NumberInput, Select, TextInput } from '@mantine/core';
import useFilter from '../../hooks/useFilter';
import { Link, useSearchParams } from 'react-router-dom';




const Filters = () => {

    const [searchParams] = useSearchParams();

    const loc = searchParams.get('loc');
    const bed = searchParams.get('bed')
    const bath = searchParams.get('bath')
    const type = searchParams.get('type')
    const upper = searchParams.get('upper')
    const lower = searchParams.get('lower')

    const { uloc, bedRooms, bathRooms, utype, ulower, uupper, setLoc, setBedRooms, setBathRooms, setType, setLower, setUpper } = useFilter();


    return (
        <>
            <h2 className='text-3xl text-base-100 my-2'>Find Your Destination</h2>
            <TextInput
                defaultValue={loc}
                className="my-2"
                placeholder=""
                onChange={(event) => setLoc(event.currentTarget.value)}
                label="Location"
            />
            <Grid className='my-2'>
                <Grid.Col span={6} className='my-2'>
                    <Select
                        defaultValue={bed}
                        className=""
                        label="Guest"
                        placeholder="Pick one"
                        data={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                        ]}
                        onChange={setBedRooms}
                    />
                </Grid.Col>
                <Grid.Col className='my-2' span={6}>
                    <Select
                        defaultValue={bath}
                        label="Days"
                        placeholder="Pick one"
                        data={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                        ]}
                        onChange={setBathRooms}
                    />
                </Grid.Col>
            </Grid>
            <Grid className='my-2'>
                <Grid.Col span={6}>
                    <NumberInput
                        defaultValue={lower}
                        label='lower Price'
                        onChange={(val) => setLower(val)}
                    />

                </Grid.Col>
                <Grid.Col span={6}>
                    <NumberInput
                        label='Upper Price'
                        defaultValue={upper}
                        onChange={(val) => setUpper(val)}
                    />
                </Grid.Col>
            </Grid>
            <button className='btn btn-secondary btn-block my-2 mt-5 text-xl text-white'>Find</button>
        </>
    );
};

export default Filters;