import Select from 'react-select'
import React from 'react'

const DropDown = ({ options, onSelect, placeholder, isDisabled }) => {

    const modOptions = options.map((item) => ({...item, label: item.name}))

    return (
        <div className='d-flex justify-content-center mt-5' >
            <div className='mx-2 my-2'>
                <Select isDisabled={isDisabled} placeholder={placeholder} onChange={(val) => onSelect(val)} options={modOptions} />
            </div>
        </div>
    );
}

export default DropDown;