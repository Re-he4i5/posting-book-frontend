import TextField from "@mui/material/TextField";

function CreateForm(props) {
  return (
    <form>
      <div>
      <TextField
        label="title"
        id="title"
        value={props.inputs["title"]}
      
        />
      </div>

      <div>
      <TextField
        label="content"
        id="content"
        value={props.inputs["content"]}
      />
      </div>
    </form>
  )
}

export default CreateForm;