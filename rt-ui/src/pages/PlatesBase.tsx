import { Box, Button, Container, MenuItem, Pagination, Select, SelectChangeEvent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useFetchData } from '../hooks/useFetchData';
import { PaginatedResult } from '../interfaces/PaginatedResultDto';

interface PlatesBase<T> {
    title: string;
    serviceUrl: string;
    endpoint: string;
    renderList: (data: T[]) => React.ReactNode;
}

function DataPage<T>({ title, serviceUrl, endpoint, renderList }: PlatesBase<T>) {
    const [pageNumber, setPageNumber] = useState(1);
    const [sortOrder, setSortOrder] = useState('RegistrationAsc');
    const pageSize = 10;
    const apiUrl = `${serviceUrl}${endpoint}?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}`;
    const { result, loading, error } = useFetchData<PaginatedResult<T>>(apiUrl);
    const navigate = useNavigate();

    useEffect(() => {
        // You can add any side effects here if needed
    }, [sortOrder, pageNumber]);

    if (loading) { return <Loading />; }
    if (error) { return <Error error={error} />; }

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    const handleSortChange = (event: SelectChangeEvent) => {
        setSortOrder(event.target.value);
        setPageNumber(1);
    };

    return (
        <Container>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Back
                </Button>
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
            </Box>
            <Typography variant="h2" mb={2}>
                {title}
            </Typography>

            <Box>
                <Select
                    value={sortOrder}
                    onChange={handleSortChange}
                    variant="outlined"
                    displayEmpty
                    style={{ minWidth: 200 }}
                >
                    <MenuItem key="RegistrationAsc" value="RegistrationAsc">Registration - A to Z</MenuItem>
                    <MenuItem key="RegistrationDesc" value="RegistrationDesc">Registration - Z to A</MenuItem>
                    <MenuItem key="SalePriceAsc" value="SalePriceAsc">Sale Price - Low to High</MenuItem>
                    <MenuItem key="SalePriceDesc" value="SalePriceDesc">Sale Price - High to Low</MenuItem>
                </Select>
            </Box>

            {result ? renderList(result.data) : null}

            <Box mb={4}>
                {result && (
                    <Pagination
                        count={Math.ceil(result.totalRecords / result.pageSize)}
                        page={result.currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                    )}
            </Box>
        </Container>
    );
}

export default DataPage;
