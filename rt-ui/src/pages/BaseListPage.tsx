import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useFetchData } from '../hooks/useFetchData';
import Loading from '../components/Loading';
import Error from '../components/Error';

interface BaseListPage<T> {
    title: string;
    serviceUrl: string;
    endpoint: string;
    renderList: (data: T) => React.ReactNode;
}

function ApiPage<T>({ title, serviceUrl, endpoint, renderList }: BaseListPage<T>) {
    const apiUrl = `${serviceUrl}${endpoint}`;
    const { data, loading, error } = useFetchData<T>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            <Typography gutterBottom>
                <Button
                    variant="outlined"
                    color="primary"
                    href={apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textTransform: 'lowercase' }}
                >
                    {endpoint}
                </Button>
            </Typography>
            {data ? renderList(data) : null}
        </Container>
    );
}

export default ApiPage;
