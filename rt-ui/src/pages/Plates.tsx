import { List, ListItem, ListItemText } from '@mui/material';
import { PlateBasicDto } from '../interfaces/PlateBasicDto.ts';
import BaseListPage from './BaseListPage.tsx';

function Plates() {
    return (
        <BaseListPage<PlateBasicDto>
            title = "Plates"
            serviceUrl= "http://localhost:5101"
            endpoint= "/api/plates"
            renderList = {(plates) => (
                <List>
                    {plates.map((plateBasicDto) => (
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
