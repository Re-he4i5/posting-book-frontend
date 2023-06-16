import { Box, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

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
        <Grid>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={(e) => props.onSubmit(props.post.id, props.inputs, e)}
          >
            Update
          </Button>
        </Grid>
      </form>
    </Box>
  );
}

export default EditForm;
