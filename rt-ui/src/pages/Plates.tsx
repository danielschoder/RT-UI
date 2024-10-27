import { List, ListItem, ListItemText, Typography } from '@mui/material';
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
                    {plates.map((plate) => (
                    //    <ListItem key={plateBasicDto.id}>
                    //        <ListItemText primary={plateBasicDto.registration} />
                    //    </ListItem>
                        <ListItem key={plate.id} divider>
                            <ListItemText
                                primary={
                                    <Typography variant="h6">
                                        Registration: {plate.registration || "N/A"}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Purchase Price: £{plate.purchasePrice.toFixed(2)} | Sale Price: £{plate.salePrice.toFixed(2)}
                                        {plate.status === 1 && " | Reserved"}
                                    </Typography>
                                }
                            />
                        </ListItem>                    ))}
                </List>
            )}
        />
    );
}

export default Plates;
