import { Box, Grid, TextField } from "@mui/material";

function EditForm(props) {
  return (
    <Box>
      <form>
        <Grid>
          <TextField value={props.inputs["title"]} autoFocus={true} />
          <TextField value={props.inputs["body"]} />
        </Grid>
      </form>
    </Box>
  );
}

export default EditForm;
