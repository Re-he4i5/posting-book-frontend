import TextField from "@mui/material/TextField";

function CreateForm(props) {
  return (
    <form>
      <div>
      <TextField
        label="title"
        id="title"
        value={props.inputs["title"]}
        onChange={(e) => props.onChange("title",e)}
        />
      </div>

      <div>
        <TextField
          label="body"
          id="body"
          value={props.inputs["body"]}
          onChange={(e) => props.onChange("body",e)}
        />
      </div>
    </form>
  )
}

export default CreateForm;