import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function CreateForm(props) {
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            value={props.inputs["title"]}
            onChange={(e) => props.onChange("title", e)}
          />
        </Grid>
        <Grid m={1} />
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="body"
            variant="outlined"
            value={props.inputs["body"]}
            onChange={(e) => props.onChange("body", e)}
          />
        </Grid>
        <Grid />
        <Grid item xs={12}>
          <Box mt={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={props.onSubmit}
              endIcon={<SendIcon />}
            >
              Create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

export default CreateForm;
