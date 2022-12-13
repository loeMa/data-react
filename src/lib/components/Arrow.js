/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types';
import 'datable-react/dist/index.css';


/**
 * Component to show next or previous list of data
 * @param {Object} customButton - style for the button
 * @param {string} onclick - name of the onclick's function
 * @param {string} title - title of the button
 * @param {string} classname - classname for next ans previous btn
 * @returns {HTMLElement}
 */
const Arrow = ({customButton, classname, onclick, title}) => {

    const {store} = useContext(StoreContext);

    // update index, count and current page when click on next button
    const nextData = () =>{
        store.indexEnd[1](store.indexEnd[0] + store.length[0]);
        store.indexStart[1](store.indexStart[0] + store.length[0]);
        store.count[1](store.count[0] - store.length[0]);
        store.currentPage[1](store.currentPage[0] + 1)

    }
    // update index, count and current page when click on previous button
    const previousData= () =>{
        store.indexEnd[1](store.indexEnd[0] - store.length[0]);
        store.indexStart[1](store.indexStart[0] - store.length[0]);
        store.count[1](store.count[0] + store.length[0]);
        store.currentPage[1](store.currentPage[0] - 1)

    }

    return (
        <div style={customButton} className={classname} >
            {onclick === nextData.name?
            <button  onClick={nextData}>{title}</button> 
            :
            <button  onClick={previousData}>{title}</button> 
            }  
        </div>
        
        
    );
};

Arrow.propTypes = {
    customButton: PropTypes.object, 
    onclick: PropTypes.string,
    title: PropTypes.string,
    classname: PropTypes.string
}

export default Arrow;