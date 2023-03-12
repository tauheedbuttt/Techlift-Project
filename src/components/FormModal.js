import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Form from "./Form";

const FormModal = ({ show, fields, title, handleClose, submit }) => {
  const [loading, setLoading] = useState();

  const onSubmit = async () => {
    try {
      setLoading(true);
      // validate inputs
      const notFilled = fields?.filter(
        (item) => item.required == true && !item.value
      );
      if (notFilled.length != 0) {
        setLoading(false);
        return alert("Kindly fill all required fields");
      }
      await submit();
      setLoading(false);
      handleClose();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fields={fields} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={loading}
          size="lg"
          variant="primary"
          onClick={onSubmit}
        >
          {loading ? `Submitting..` : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
