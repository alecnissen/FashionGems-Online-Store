import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiRequest from '../../API-CALLS/ApiRequest';
import backArrow from '../../../Images/checkout-component-back-arrow.png';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({ isOpen, setIsOpen, onClose }) {
  const [modalData, setModalData] = useState([]);
  const [query, setQuery] = useState('');

  const filteredItems = modalData.filter((item) => {
    return item.title.toString().toLowerCase().includes(query.toLowerCase());
  });

  console.log(filteredItems);

  useEffect(() => {
    ApiRequest().then((data) => {
      setModalData(data);
    });
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />

      <div className="model-content-container">
        <div className="modal-content-styles">
          <h6 className="modal-header-styles">
            <img src={backArrow} onClick={onClose} className="back-arrow-search-modal"></img>
            Search for Items
          </h6>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
            }}
          ></input>

          {query !== '' &&
            filteredItems.map((item) => {
              return (
                <>
                  <div className="modal-product-wrapper">
                    <Link to={`/ProductPage/${item.id}`} onClick={onClose} className="modal-link-styles">
                      <div className="modal-product-styles" key={item.key}>
                        <img src={item.image} className="modal-product-img-styles"></img>

                        <div className="modal-product-price-title-container">
                          {item.title}
                          <div className="modal-item-price-styles">${item.price.toFixed(2)}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
