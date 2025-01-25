/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import Button from '../../ui/Button';
import { useEffect, useRef } from 'react';

const StyledCreateNewCabin = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 800px;
  height: auto;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-sm);
  padding: 3rem;

  display: grid;
  gap: 1.2rem;

  & hr {
    border: none;
    height: 1px;
    background-color: var(--color-grey-100);
  }
`;

const StyledFromRow = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 1.2fr;
  align-items: center;

  & label {
    flex-basis: 40%;
    font-size: 1.4rem;
    font-weight: 500;
  }

  & input:not([type='file']),
  & textarea {
    border: 1px solid var(--color-grey-300);
    padding: 0.7rem 1rem;
    border-radius: var(--border-radius-md);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }
`;

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

function CreateNewCabin({ onClose }) {
  const modalRef = useRef(null);

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close the modal
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <StyledCreateNewCabin>
      <Form ref={modalRef}>
        <StyledFromRow>
          <label htmlFor="name">Cabin name</label>
          <FileInput type="text" name="name" id="name" />
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <FileInput type="number" name="maxCapacity" id="maxCapacity" />
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="price">Regular price</label>
          <FileInput type="number" name="RegularPrice" id="price" />
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="discount">Discount</label>
          <FileInput type="number" name="discount" id="discount" />
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="discount">Discount</label>
          <FileInput type="number" name="discount" id="discount" />
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="description">Description for website</label>
          <textarea name="description" id="description" rows={4}></textarea>
        </StyledFromRow>

        <hr />

        <StyledFromRow>
          <label htmlFor="image">Cabin photo</label>
          <FileInput id="image" accept="image/*" type="file" />
        </StyledFromRow>

        <StyledFromRow>
          <Button variation="secondary" size="medium">
            Cancel
          </Button>
          <Button variation="primary" size="medium">
            create new cabin
          </Button>
        </StyledFromRow>
      </Form>
    </StyledCreateNewCabin>
  );
}

export default CreateNewCabin;
