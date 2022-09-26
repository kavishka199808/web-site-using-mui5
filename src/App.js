
import { Add, Settings } from "@mui/icons-material";

import{Typography,styled,Button} from "@mui/material"

function App() {

  const BlueButton = styled(Button)({
    backgroundColor:"skyblue",
    color:"#888",
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue"
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"

    }

  });
  return (
    <div>
       <Button variant="text">Text</Button>
       <Button startIcon={<Settings/>} variant="contained" color="secondary" size="small">Contained</Button>
       <Button startIcon={<Add/>} variant="contained" color="success" size="small">Add New Post</Button>
       <Button variant="outlined" dissable>Outlined</Button>

      <Typography variant="h1" component="p">
                It Use h1 style but it is p
      </Typography>;

      <BlueButton>My Button</BlueButton>
      <BlueButton>another Button</BlueButton>
      
    </div>
  );
}

export default App;
