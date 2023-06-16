import { Box, Grid, TextField } from "@mui/material";

function EditForm(props) {
  return (
    <Box>
      <form>
        <Grid>
          <TextField
            value={props.inputs["title"]}
            label="title"
            autoFocus={true}
            onChange={(e) => props.onChange("title", e)}
          />
          <TextField
            value={props.inputs["body"]}
            label="body"
            autoFocus={true}
            onChange={(e) => props.onChange("body", e)}
          />
        </Grid>
      </form>
    </Box>
  );
}

export default EditForm;
