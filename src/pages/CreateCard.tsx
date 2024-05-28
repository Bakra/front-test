import React from 'react';
import './CreateCard.css';
import { AddPlayerButton, Modal } from './style';
import useAddPlayer from '../hooks/useAddPlayer';

/**
 * Step 3: Render a form and everything needed to be able to create a card
 */
export const CreateCard = () => {
  const { field, handleChange, handleSubmit, openModal, closeModal } =
    useAddPlayer();

  const getRules = (arg: any) => arg.rules || {};

  return (
    <div>
      <AddPlayerButton onClick={openModal}>Add Player</AddPlayerButton>
      <Modal id="addPlayer">
        <div>
          <h2>Add New Player</h2>
          <form onSubmit={handleSubmit}>
            {field.map((item) => (
              <div className="mb-4" key={item.value}>
                <label htmlFor="name">{item.title}</label>
                <input
                  type={item.field}
                  name={item.value}
                  required
                  onChange={handleChange}
                  {...getRules(item)}
                />
              </div>
            ))}
            <div className="flex-box">
              <button className="cancel" onClick={() => closeModal()}>
                {' '}
                Cancel
              </button>
              <button className="save" type="submit">
                {' '}
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
