import React, { useState } from 'react';
import { Container, Typography, Button, Pagination } from '@mui/material';
import { useFetchData } from '../hooks/useFetchData';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { PaginatedResult } from '../interfaces/PaginatedResultDto';

interface BaseListPage<T> {
    title: string;
    serviceUrl: string;
    endpoint: string;
    renderList: (data: T[]) => React.ReactNode;
}

function DataPage<T>({ title, serviceUrl, endpoint, renderList }: BaseListPage<T>) {
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 20;
    const apiUrl = `${serviceUrl}${endpoint}?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=RegistrationAsc`;
    const { result, loading, error } = useFetchData<PaginatedResult<T>>(apiUrl);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

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
            {result ? renderList(result.data) : null}
            {result && (
                <Pagination
                    count={Math.ceil(result.totalRecords / result.pageSize)}
                    page={result.currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                />
            )}
        </Container>
    );
}

export default DataPage;
