import { useEffect, useState } from 'react';

const field = [
  {
    title: 'First Name',
    value: 'firstname',
    field: 'text',
  },
  {
    title: 'Last Name',
    value: 'lastname',
    field: 'text',
  },
  {
    title: 'Email',
    value: 'email',
    field: 'email',
  },
  {
    title: 'Birth Day',
    value: 'birthday',
    field: 'date',
  },
  {
    title: 'Image',
    value: 'image',
    field: 'file',
  },
] as const;

const useAddPlayer = () => {
  const [fields, setFields] = useState({});

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    const type = e.target.type;
    if (type === 'file') {
      value = e.target.files[0];
    }
    setFields({ ...fields, [name]: value });
  };

  const openModal = () => {
    const dialog = document.getElementById('addPlayer') as HTMLDialogElement;
    dialog.show();
  };

  const closeModal = () => {
    const dialog: HTMLDialogElement = document.getElementById(
      'addPlayer'
    ) as HTMLDialogElement;
    dialog.close();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('http://localhost:8001/cards', {
      method: 'post',
      body: JSON.stringify({ player: fields }),
    })
      .then((res) => res.json())
      .then(() => closeModal());
  };

  useEffect(() => {
    const obj = {};
    field.map((item) => (obj[item.value] = ''));
    setFields(obj);
  }, []);

  return { fields, field, handleChange, handleSubmit, openModal, closeModal };
};

export default useAddPlayer;
