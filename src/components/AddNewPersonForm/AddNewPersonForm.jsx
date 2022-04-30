import TextField from "@mui/material/TextField";

export const ContactForm = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
      }}
    >
      <label>
        Name
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="normal"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label>
        Date label
        <input
          type="date"
          name="date"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <label>
        Department
        <input
          type="tel"
          name="department"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </form>
  );
};
