import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { useContext, useRef } from "react";
import { TodoContext } from "../../Context";

export default function ModalWindow() {

  const { modal, handler_close, handler_edit, info } = useContext(TodoContext);

  const title = useRef(null);
  const description = useRef(null);
  const tag = useRef(null);

  const edit_note = () => {
    if(title.current.value !== '' && description.current.value !== '' && tag.current.value !== '') {
      handler_edit(title, description, tag);
      handler_close();
    }
  }

  return (
    <Modal show={modal} onHide={() => handler_close()}>

      <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          <InputGroup className="mb-3">
            <InputGroup.Text>New Title</InputGroup.Text>
            <Form.Control type="text" defaultValue={info.title} placeholder={info.title} ref={title}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>New Description</InputGroup.Text>
            <Form.Control type="text" defaultValue={info.description} placeholder={info.description} ref={description}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>New Tag</InputGroup.Text>
            <Form.Control type="text" defaultValue={info.tag} placeholder={info.tag} ref={tag}/>
          </InputGroup>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => handler_close()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => edit_note()}>
          Save Changes
        </Button>
      </Modal.Footer>

    </Modal>
  )
}