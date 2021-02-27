import React from 'react';
import './Modal.css';

const Modal = ({show, data, closeModal }) => {
    return (
        <div className="main" style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}>
            <div className="main-content">
                <div className="modal-image">
                    <img className = "modal-img" src={data.image_url} alt="game-image" />
                    <h6>
                        <span className="heading">{data?.name}</span>
                        <span className="heading sub">{data?.region}</span>
                    </h6>
                </div>
                <h4>Pricing</h4>
                <div className="row">
                    <h6>1 week - 1 month</h6>
                    <h6>${data?.price?.monthly || 0}</h6>
                </div>
                <div className="row">
                    <h6>6 months</h6>
                    <h6>${data?.price?.semiAnnualy || 0}</h6>
                </div>
                <div className="row">
                    <h6>1 Year</h6>
                    <h6>${data?.price?.yearly || 0}</h6>
                </div>
                <div className="btn-close">
                    <button className="btn-cancel" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;