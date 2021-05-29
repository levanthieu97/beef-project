import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FILTER_CHECKBOX} from './FilterType';
import {useForm} from 'react-hook-form';
import CheckBox from './checkbox-component';
import {typeFilter} from '../../core/Foundation';
import {setFilterOpen} from '../../store/actions/GlobalAction';
import { GiSteak, GiPig, GiSadCrab } from "react-icons/gi";

const LeftFilterComponent = (props) => {

    const {register} = useForm();
    const {filterOpen} = useSelector(state => state.globalSlice);
    const dispatch = useDispatch();
    const getFilterProducts = () => {};

    const iconProductType = (typeId) => {
        switch(typeId) {
            case typeFilter.BEEF:
                return <GiSteak/>;
            case typeFilter.PORK:
                return <GiPig/>
            case typeFilter.SEAFOOD:
                return <GiSadCrab/>
            default: 
                return <GiSteak/>
        }
    }

    const filterByCheckBox = () => {
        return FILTER_CHECKBOX.map((type, index) => {
            const filterType = type.filterType;
            return <div className="products-filter__block" key={index}>
                    <button type="button">
                        {iconProductType(type.id)}
                        <span>{type.name}</span>
                    </button>
                    <div className={`products-filter__block__content`}>
                        {filterType.map(items => {
                            return <CheckBox
                                type={items.type}
                                key={items.id}
                                // refs={register({required: true})}
                                name={items.name}
                                label={items.label}
                            />
                        })}
                    </div>
                </div>            
        })
    }

    const closeFilterOpen = () => {
        if(filterOpen) {
            return (
                <button type="button" className="products-filter__close" onClick={() => dispatch(setFilterOpen(!filterOpen))}>
                    <i className="icon-cancel"></i>
                </button>
            )
        }
        return null;
    }


    return (
        <React.Fragment>
            <form className="products-filter" onChange={getFilterProducts}>
                {/* <button type="button"
                    onClick={() => setFilterOpen(!filterOpen)}
                    className={`products-filter__menu-btn ${filterOpen ? 'products-filter__menu-btn--active' : ''}`}>
                        Add Filter <i className="icon-down-open"></i>
                </button> */}
                <div className={`products-filter__wrapper ${filterOpen ? 'products-filter__wrapper--open' : ''}`}>
                    <div className={`products-filter__items ${filterOpen ? 'products-filter__wrapper-items' : ''}`}>
                        {closeFilterOpen()}
                        {filterByCheckBox()}
                        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );

}

export default React.memo(LeftFilterComponent);