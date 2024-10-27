import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { DbContentChangeDto } from '../interfaces/DbContentChangeDto';
import BaseListPage from './BaseListPage';

function DbContentChanges() {
    return (
        <BaseListPage<DbContentChangeDto>
            title = "Database Content Changes"
            serviceUrl= "https://localhost:7168"
            endpoint = "/api/dbcontentchanges"
            renderList = {(dbContentChanges) => (
                <List>
                    {dbContentChanges.map((dbContentChange) => (
                        <ListItem key={dbContentChange.id} divider>
                            <ListItemText
                                primary={
                                    <Typography variant="h6">
                                        Entity ID: {dbContentChange.entityId || "N/A"}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="div" variant="body2" color="textSecondary">
                                        <div>Entity Name: {dbContentChange.entityName || "N/A"}</div>
                                        <div>Field Name: {dbContentChange.fieldName || "N/A"}</div>
                                        <div>Old Content: {dbContentChange.oldContent || "N/A"}</div>
                                        <div>New Content: {dbContentChange.newContent || "N/A"}</div>
                                        <div>Changed By: {dbContentChange.changedBy || "N/A"} (ID: {dbContentChange.changedById || "N/A"})</div>
                                        <div>Changed Date: {new Date(dbContentChange.changedDateTime).toLocaleString()}</div>
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        />
    );
}

export default DbContentChanges;
