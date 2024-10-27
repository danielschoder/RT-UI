import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { PlateBasicDto } from '../interfaces/PlateBasicDto.ts';
import PlatesBase from './PlatesBase.tsx';

function Plates() {
    const formatCurrency = (amount: number) => {
        return `\u00A3${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    return (
        <PlatesBase<PlateBasicDto>
            title = "Plates"
            serviceUrl= "http://localhost:5101"
            endpoint= "/api/plates"
            renderList = {(plates) => (
                <List>
                    {plates.map((plate) => (
                        <ListItem key={plate.id} divider>
                            <ListItemText
                                primary={
                                    <Typography variant="h6">
                                        Registration: {plate.registration || "N/A"}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Purchase Price: {formatCurrency(plate.purchasePrice)} |
                                        Sale Price: {formatCurrency(plate.salePrice)}
                                        {plate.status === 1 && " | Reserved"}
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

export default Plates;
