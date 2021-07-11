import React, {useState} from "react";
import { MdCardGiftcard } from "react-icons/md";
import { useForm } from "react-hook-form";
import CheckBox from '../../left-filter-component/checkbox-component';

const GiftInfoComponent = (props) => {
    const [giftChecked, setGiftChecked] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const checkboxGift = (value) => {
        setGiftChecked(value === "true" ? false : true);
    }

    const renderGiftForm = () => {

        return giftChecked && (
            <div className="gift-wrap-form">
                <form>

                </form>
            </div>
        )
    }

    return (
        <div className="gift-container">
            <div className="cart-gift-item">
                <div className="gift-section-title">
                    <span className="gift-icon"><MdCardGiftcard/></span>
                    <span className="gift-header-title">Is It a Gift?</span>
                </div>
                <div className={`checkbox-label ${giftChecked ? 'gift_collapsed' : ''}`}>
                    <CheckBox 
                        label="Yes, this is a gift"
                        onChange={checkboxGift}
                        value={giftChecked}
                        name=""
                    />
                </div>
            </div>
        </div>
        
    )
}

export default GiftInfoComponent;