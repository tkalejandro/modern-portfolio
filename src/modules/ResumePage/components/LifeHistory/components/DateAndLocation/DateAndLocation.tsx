import { Box, Typography } from '@mui/material';


interface LifeHistoryProps {
    startDate: Date
    endDate?: Date
    city?: string
    country: string
    online: boolean
}

const DateAndLocation = ({ startDate, endDate, city, country, online }: LifeHistoryProps) => {

    return (
        <Box py={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontStyle: "italic" }}>
            <Box sx={{ display: 'flex' }}>
                <Typography color="secondary.light">{startDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit' })}</Typography>
                {
                    endDate
                        ? <Typography color="secondary.light" ml={1}>{'-'} {endDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit' })}</Typography>
                        : <Typography color="secondary.light" ml={1}> {'-'} Present</Typography>
                }

            </Box>
            <Box sx={{ display: 'flex' }}>
                <Typography color="secondary.light">{city && `${city},`} {country}</Typography>
                {
                    online && <Typography color="secondary.light" ml={1}>{' (Online)'}</Typography>
                }
            </Box>
        </Box>
    )
};

export default DateAndLocation;