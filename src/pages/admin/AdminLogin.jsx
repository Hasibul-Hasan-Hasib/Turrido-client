import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
} from '@mantine/core';


function AdminLogin() {
    return (
        <div className='my-auto ' >
            <Container size='xs'>
                <Paper withBorder shadow="md" p={40} radius="md" className='bg-gray-100'>
                    <Title
                        align="center"
                        className='my-5 text-secondary'
                    >
                        Admin Login
                    </Title>
                    <TextInput label="Email" placeholder="you@mantine.dev" />
                    <PasswordInput label="Password" placeholder="Your password" mt="md" />
                    <div className='my-5 flex justify-evenly'>
                        <button fullWidth mt="xl" className='btn btn-primary w-2/5'>
                            Login
                        </button>
                        <button className='btn btn-secondary w-2/5' fullWidth color='cyan' mt="xl">
                            Go Back
                        </button>
                    </div>
                </Paper>
            </Container >
        </div>
    );
}


export default AdminLogin;