/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import {
  HiEllipsisVertical,
  HiSquare2Stack,
  HiPencil,
  HiTrash,
} from 'react-icons/hi2';
import Button from '../../ui/Button';

const Row = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.8fr 1fr 0.25fr;
  align-items: center;
  column-gap: 3rem;
  padding-block: 0.4rem;

  font-size: 1.4rem;
  font-weight: 600;

  & .discount {
    color: var(--color-green-700);
  }

  & .price {
    font-weight: 600;
  }

  & .capacity {
    font-weight: normal;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Options = styled.div`
  cursor: pointer;
  position: relative;
  & button > span {
    font-size: 2.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
  }

  & button:focus {
    border: 1px solid
      ${(props) =>
        props.isactive === 'true' ? 'var(--color-brand-700)' : 'transparent'};
  }
`;

const OptionList = styled.ul`
  position: absolute;
  right: 100%;
  top: ${(props) =>
    props.firstlast === 'true' || props.secondlast === 'true'
      ? '-120px'
      : 'calc(100% + 5px)'};
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  display: ${(props) => (props.isactive === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;

  & li {
    padding: 0.8rem 2rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    color: var(--color-grey-500);
  }

  & li:hover {
    background-color: var(--color-grey-50);
  }

  & li span {
    font-size: 1.6rem;
  }
`;

function Cabin({
  cabin,
  onActivedCabin,
  isActived,
  isFirstLast,
  isSecondLast,
}) {
  const { name, maxCapacity, regularPrice, discount } = cabin;
  return (
    <>
      <hr />
      <Row>
        <Image src="cabin-001.jpg" alt="img-1" />

        <p>{name}</p>
        <p className="capacity">Fits up to {maxCapacity} guests</p>
        <p className="price">${regularPrice}</p>
        <p className="discount">${discount}</p>

        <Options isactive={isActived ? 'true' : 'false'}>
          <Button onClick={() => onActivedCabin(name)}>
            <span>
              <HiEllipsisVertical />
            </span>
          </Button>

          <OptionList
            isactive={isActived ? 'true' : 'false'}
            firstlast={isFirstLast ? 'true' : 'false'}
            secondlast={isSecondLast ? 'true' : 'false'}
          >
            <li>
              <span>
                <HiSquare2Stack />
              </span>
              Duplicate
            </li>

            <li>
              <span>
                <HiPencil />
              </span>
              Edit
            </li>

            <li>
              <span>
                <HiTrash />
              </span>
              Delete
            </li>
          </OptionList>
        </Options>
      </Row>
    </>
  );
}

export default Cabin;
