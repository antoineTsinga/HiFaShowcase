import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/*
name =[
{label, value}
]
*/

export default function CheckboxesGroup({ title, items }) {
  console.log(items);
  const [state, setState] = React.useState(items);

  const styleh1 = { fontStyle: "normal", fontWeight: "700", fontSize: "20px" };

  const handleChange = (event) => {
    console.log("items", items);
    const items2 = items.map((item) => {
      if (item.name !== event.target.name) return item;

      return { ...item, value: event.target.checked };
    });
    console.log(items2);
    setState(items2);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" style={{ ...styleh1 }}>
          {title}
        </FormLabel>
        <FormGroup>
          {state.map((item) => (
            <FormControlLabel
              key={item.label}
              control={
                <Checkbox
                  key={item.label}
                  checked={state.value}
                  onChange={handleChange}
                  name={item.label}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
