import {Box, Button, Divider, Typography} from "@mui/material";
import {motion} from "framer-motion";
import {variants} from "../../styles/theme/Animations";
import {useAppStore} from "../../stores/StoreContext";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import UpgradeCard from "../custom/UpgradeCard";
import {Upgrade} from "../../models/Upgrade";

const Clicker = () => {
    const dataStore = useAppStore().dataStore$;
    const increment = 1;
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const handleButtonClick = () => {
        dataStore.increaseClickerScore(increment)
        setHasBeenClicked(true)
    };

    const testUpgrade = new Upgrade({
        id: 1,
        title: "This is not a clicker game",
        description: "Let's get rid of this stupid button! Generate 1 point/s.",
        price: 10
    })
    return (
        <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
            <Typography variant={"h3"} align={"center"}>
                {dataStore.clickerScore$}
            </Typography>
            {hasBeenClicked &&
                <motion.h3 key={"clickerScore" + dataStore.clickerScore$} variants={variants.h3} animate={"animate"}>
                    <Typography variant={"h3"} align={"center"}
                                sx={{
                                    position: "absolute", left: 0,
                                    right: 0,
                                    marginInline: "auto",
                                    width: "fit-content",
                                    color: "#00A900"
                                }}>
                        {"+" + increment}
                    </Typography>
                </motion.h3>
            }

            <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
                <Box sx={{textAlign: "center", mt: 2}}>
                    <Button size={"large"} variant={"outlined"} onClick={handleButtonClick}>Click me!</Button>
                </Box>
            </motion.div>
            <Divider sx={{mt: 2, mb: 2}} variant={"middle"}/>
            <motion.div variants={variants.page} exit={"exit"} initial={"initial"} animate={"animate"}>
                <UpgradeCard upgrade={testUpgrade}/>
            </motion.div>
        </motion.div>
    )
};

export default observer(Clicker);