import { Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

const height = 32;

export const Buttons = () => {
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState();

  return (
    <>
      <Grid container spacing={2} alignItems="center" >
        <Grid item>
          <Button           
            disabled={!inputValue}
            variant="contained"
            size="large"
            sx={{ height }}
          > 
            ALL
          </Button>
        </Grid>
        <Grid item>
          <Button           
            disabled={!inputValue}
            variant="contained"
            size="large"
            sx={{ height }}
          > 
            DONE
          </Button>
        </Grid>          
        <Grid item>
          <Button           
            disabled={!inputValue}
            variant="contained"
            size="large"
            sx={{ height }}
          > 
            IN PROGRES
          </Button>
        </Grid>
      </Grid>  
    </> 
  );
};
    