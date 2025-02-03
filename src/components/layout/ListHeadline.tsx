import {Box, Typography} from "@mui/material";

const ListHeadline = ({title}: { title: string }) => {
    return (
        <Box sx={{backgroundColor: "#555555", mt: 1, mb: -1}}>
            <Typography variant={"overline"} sx={{pl: 2}}>{title}</Typography>
        </Box>
    )
};

export default ListHeadline;