import {Button, Card, CardActions, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import {Upgrade} from "../../models/Upgrade";
import {useAppStore} from "../../stores/StoreContext";

const UpgradeCard = ({upgrade}: {upgrade: Upgrade}) => {
    const store = useAppStore().dataStore$;
    const handleBuyUpgrade = () => {

    }
  return (
      <Card className="grain" sx={{
          height: "100%",
          width: "320px",
          borderRadius: "12px",
      }}>
          <Typography variant={"h5"} sx={{p: 2}}>{upgrade.title}</Typography>
          <Divider/>
          <CardContent className={"card-content"}>
              <Typography className={"description"}>
                  {upgrade.description}
              </Typography>
          </CardContent>
          <Divider/>
          <CardActions>
              <Button variant={"outlined"} disabled={store.clickerScore$ < upgrade.price} onClick={handleBuyUpgrade}>
                  Buy: {upgrade.price}
              </Button>
          </CardActions>
      </Card>
  );
}

export default UpgradeCard;