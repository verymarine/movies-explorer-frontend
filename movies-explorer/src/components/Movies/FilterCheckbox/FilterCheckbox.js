import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    return (
        <>
            <div className="checkbox__block">
                <input type="checkbox" />
                <label for="checkbox"><span className="checkbox__title">Короткометражки</span></label>
            </div>


        </>
    );
}

export default FilterCheckbox;