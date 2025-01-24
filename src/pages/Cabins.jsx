/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import {
  HiEllipsisVertical,
  HiSquare2Stack,
  HiPencil,
  HiTrash,
} from 'react-icons/hi2';
import Button from '../ui/Button';
import { useState } from 'react';

const cabins = [
  {
    name: '001',
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    description:
      'Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.',
  },
  {
    name: '002',
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    description:
      'Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.',
  },
  {
    name: '003',
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    description:
      'Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '004',
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    description:
      'Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '005',
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    description:
      'Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '006',
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    description:
      'Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '007',
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    description:
      'Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '008',
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },

  {
    name: '009',
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    description:
      'Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '010',
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    description:
      'Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '011',
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    description:
      'Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '012',
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    description:
      'Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.',
  },
  {
    name: '013',
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    description:
      'Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.',
  },
  {
    name: '014',
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
];

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  max-height: 650px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-400);
  }

  &:focus::-webkit-scrollbar-thumb,
  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);

  & hr {
    border: 0;
    height: 1px;
    background-color: var(--color-grey-200);
    margin-block: 1px;
  }
`;

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

const HeaderRow = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.8fr 1fr 0.25fr;
  column-gap: 3rem;
  padding: 1.5rem 0;
  background-color: var(--color-grey-100);

  & h4 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.4rem;
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
    props.firstLast === 'true' || props.secondLast === 'true'
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Cabins() {
  const [activedCabin, setActivedCabin] = useState(null);
  function handleActivedCabin(id) {
    if (id === activedCabin) {
      setActivedCabin('');
      return;
    }
    setActivedCabin(id);
  }
  return (
    <>
      <h1>All cabins</h1>
      <Content>
        <Table role="table">
          <HeaderRow>
            <div></div>
            <h4 role="rowheader">cabin</h4>
            <h4 role="rowheader">cpacity</h4>
            <h4 role="rowheader">price</h4>
            <h4 role="rowheader">discount</h4>
            <div></div>
          </HeaderRow>

          <Rows>
            {cabins.map((cabin, i) => (
              <Cabin
                cabin={cabin}
                key={cabin.name}
                onActivedCabin={handleActivedCabin}
                isActived={activedCabin === cabin.name}
                isFirstLast={cabins.length - 1 === i}
                isSecondLast={cabins.length - 2 === i}
              />
            ))}
          </Rows>
        </Table>

        <Button size="medium" variation="primary">
          Add new Cabin
        </Button>
      </Content>
    </>
  );
}

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
            firstLast={isFirstLast ? 'true' : 'false'}
            secondLast={isSecondLast ? 'true' : 'false'}
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

export default Cabins;
