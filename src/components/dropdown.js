import Select from 'react-select'
import React from 'react'

const DropDown = ({ options, onSelect, placeholder }) => {

    const modOptions = options.map((item) => ({...item, label: item.name}))

    return (
        <div className='d-flex justify-content-center' >
            <div className='mx-2 my-2 w-50'>
                <Select placeholder={placeholder} onChange={(val) => onSelect(val)} options={modOptions} />
            </div>
        </div>
    );
}

export default DropDown;