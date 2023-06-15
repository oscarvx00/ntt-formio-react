import logo from './logo.svg';
import './App.css';
import { Form, FormBuilder } from '@formio/react';

function App() {

  const form = {
    "display": "form",
    "settings": {
      "pdf": {
        "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
        "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
      }
    },
    "components": [
      {
        "label": "Text Field",
        "applyMaskOn": "change",
        "tableView": true,
        "key": "textField",
        "type": "textfield",
        "input": true
      },
      {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "input": true,
        "tableView": false
      }
    ]
  }

  const form2 = {
    "display": "form",
    "settings": {
      "pdf": {
        "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
        "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
      }
    },
    "components": [
      {
        "label": "Text Field",
        "applyMaskOn": "change",
        "tableView": true,
        "key": "textField",
        "type": "textfield",
        "input": true
      },
      {
        "label": "tf2",
        "applyMaskOn": "change",
        "tableView": true,
        "key": "tf2",
        "type": "textfield",
        "input": true
      },
      {
        "label": "Submit2",
        "showValidations": false,
        "tableView": false,
        "key": "submit2",
        "type": "button",
        "input": true,
        "saveOnEnter": false
      },
      {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "input": true,
        "tableView": false
      }
    ]
  }

  function handler(submission) {
    console.log("sub")
    console.log(submission)
  }

  return (
    <div className="App">
      <FormBuilder form={form} onSubmit={handler} />
      <h1>Y si planto aqui un custom element y despues otro form</h1>
      <Form form={form2} onSubmit={handler}/>
    </div>
  );
}

export default App;
