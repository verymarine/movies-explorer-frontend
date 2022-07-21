import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    return (
        <>
            <div className="checkbox__block">
                <input onChange={props.handleCheckbox} type="checkbox" value="shortfilms" checked={props.isChecked}/>
                <label htmlFor="checkbox"><span className="checkbox__title">Короткометражки</span></label>
            </div>
        </>
    );
}

export default FilterCheckbox;
