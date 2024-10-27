import { List, ListItem, ListItemText } from '@mui/material';
import { DbContentChangeDto } from '../interfaces/DbContentChangeDto';
import BaseListPage from './BaseListPage';

function DbContentChanges() {
    return (
        <BaseListPage<DbContentChangeDto>
            title = "Database Content Changes"
            serviceUrl= "https://localhost:7168"
            endpoint = "/api/dbcontentchanges"
            renderList = {(dbcontentchanges) => (
                <List>
                    {dbcontentchanges.map((dbContentChange) => (
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
