import { List, ListItem, ListItemText } from '@mui/material';
import { PaginatedResult } from '../interfaces/PaginatedResultDto.ts';
import { PlateBasicDto } from '../interfaces/PlateBasicDto.ts';
import BaseListPage from './BaseListPage.tsx';

function Plates() {
    return (
        <BaseListPage<PaginatedResult<PlateBasicDto>>
            title = "Plates"
            serviceUrl= "http://localhost:5101"
            endpoint= '/api/plates?pageNumber=1&pageSize=20&sortOrder=RegistrationAsc'
            // url='/api/plates?pageNumber={pageNumber}&pageSize={pageSize}&sortOrder={sortOrder}'
            renderList = {(paginatedResult) => (
                <List>
                    {paginatedResult.data.map((plateBasicDto) => (
                        <ListItem key={plateBasicDto.id}>
                            <ListItemText primary={plateBasicDto.registration} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default Plates;
