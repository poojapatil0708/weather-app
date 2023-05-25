const DropDown = ({ options, title, onSelect }) => {
    return (
        <div>
            <div className="btn-group">
                <button type="button" class="btn btn-danger">{title}</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    {
                        options.map((item) => <li><div className="dropdown-item" onClick={() => onSelect(item)} >{item.name}</div></li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default DropDown;