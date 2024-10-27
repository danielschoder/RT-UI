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
                                        {dbContentChange.entityName || "N/A"}.{dbContentChange.fieldName || "N/A"}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="div" variant="body2" color="textSecondary">
                                        <div>Entity ID: {dbContentChange.entityId || "N/A"}</div>
                                        <div>Content: "{dbContentChange.oldContent || "N/A"}"{" \u2192 "}"{dbContentChange.newContent || "N/A"}"</div>
                                        <div>
                                            {new Date(dbContentChange.changedDateTime).toLocaleString()}{" - "}
                                            {dbContentChange.changedBy || "N/A"} ({dbContentChange.changedById || "N/A"})
                                        </div>
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
