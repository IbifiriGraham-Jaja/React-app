import React, { useState } from 'react';

const CreateRepoModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData({});
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{initialValues ? 'Update Repository' : 'Create Repository'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Repository Name:
            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description || ''} onChange={handleChange}></textarea>
          </label>
          <button type="submit">{initialValues ? 'Update' : 'Create'}</button>
        </form>
      </div>
    </div>
  ) : null;
};

export default CreateRepoModal;
