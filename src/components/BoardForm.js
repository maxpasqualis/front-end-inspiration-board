import PropTypes from "prop-types";
import { useState } from "react";

const BoardForm = () => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const setTitle = (event) => {};
  const setOwner = (event) => {};

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" value={formFields.title} onChange={setTitle} />
      </div>

      <div>
        <label htmlFor="owner">Owner</label>
        <input
          name="owner"
          value={formFields.owner}
          onChange={setOwner}
        ></input>
      </div>

      <button type="submit">Create Board</button>
    </form>
  );
};

BoardForm.propTypes = {};

export default BoardForm;