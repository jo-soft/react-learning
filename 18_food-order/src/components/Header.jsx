import logo from '../assets/logo.jpg'
import Cart from "./Cart.jsx";
import {useCallback, useContext, useState} from "react";
import {createPortal} from "react-dom";
import CheckoutModal from "./CheckoutModal.jsx";
import {CARD_CTX} from "../context/CardCtxProvider.jsx";

export  default  function Header() {

    const { clear: clearCart} = useContext(CARD_CTX);

    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = useCallback(() => setShowCart(false), [])

    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const handleClosePayment = useCallback(() => {
        setShowPaymentModal(false);
        clearCart();
    }, [clearCart])

    const handleProceedToPaymentClick = () => {
        setShowCart(false);
        setShowPaymentModal(true);
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="A table full of delicious food!" />
                <h1>ReactMeals</h1>
            </div>
            <button  className="button" onClick={() => setShowCart(true)}>
                <span>Cart</span>
            </button>
            {createPortal(
                <Cart
                    isVisible={showCart}
                    onClose={handleCloseCart}
                    onProceedToPaymentClick={handleProceedToPaymentClick}
                />,
                document.querySelector('body'))
            }
            {createPortal(
                <CheckoutModal
                    isVisible={showPaymentModal}
                    onClose={handleClosePayment}
                />,
                document.querySelector('body'))
            }
        </header>
    )
}