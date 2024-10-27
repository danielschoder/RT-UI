import { List, ListItem, ListItemText } from '@mui/material';
import { DbContentChangeDto } from '../interfaces/DbContentChangeDto';
import { PaginatedResult } from '../interfaces/PaginatedResultDto';
import BaseListPage from './BaseListPage';

function DbContentChanges() {
    return (
        <BaseListPage<PaginatedResult<DbContentChangeDto>>
            title = "Database Content Changes"
            serviceUrl= "https://localhost:7168"
            endpoint = "/api/dbcontentchanges?pageNumber=1&pageSize=10"
            renderList = {(paginatedResult) => (
                <List>
                    {paginatedResult.data.map((dbContentChange) => (
                        <ListItem key={dbContentChange.id}>
                            <ListItemText primary={dbContentChange.entityId} />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default DbContentChanges;
