import {CARD_CTX} from "../context/CardCtxProvider.jsx";
import {useCallback, useContext} from "react";
import CartItem from "./CartItem.jsx";
import ModalHelper from "./ModalHelper.jsx";

export  default function Cart({isVisible, onClose, onProceedToPaymentClick}) {

    const {items, updateCount} = useContext(CARD_CTX);

    const onCountChange = useCallback(
        (itemId, count) => updateCount(itemId, count)
        , [updateCount]
    )

    const total = [...items.values()].reduce((acc, item) =>
        acc + item.price * item.count,
        0
    ).toFixed(2)


    const content = items.size > 0 ?  (
        <>
            <ul>
                {[...items.values()].map((item) => (
                    <CartItem
                        key={item.name}
                        item={item}
                        onCountChange={onCountChange}
                    />
                ))
                }
            </ul>
            <div className="card-total">
                <p>Total {total}</p>
            </div>
        </>
    ) : (
        <p>No items in the cart</p>
    )

    return (
        <ModalHelper
            isVisible={isVisible}
            onClose={onClose}
            onCancel={onClose}
        >
            <div className="cart">
                <h2>Cart</h2>
                {content}
                <div className="modal-actions">
                    <button className="text-button" onClick={onClose}>Cancel</button>
                    <button
                        className="text-button primary-button"
                        onClick={onProceedToPaymentClick}
                        disabled={items.size === 0}
                    >Proceed to payment</button>
                </div>
            </div>
        </ModalHelper>
    )
}