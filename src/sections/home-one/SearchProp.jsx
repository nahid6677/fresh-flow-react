import React, { useContext } from 'react';
import FreshFlowContext from '../../components/context/FreshFlowContext';

const SearchProp = () => {
    const {setIsSearch } = useContext(FreshFlowContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Navigate to Blog")
    }
    return (
        <div className="search-popup">
            <div className="color-layer"></div>
            <button onClick={() => setIsSearch(false)} className="close-search"><span className="far fa-times fa-fw"></span></button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="search" name="search-field" defaultValue={""} placeholder="Search Here" required="" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    );
};

export default SearchProp;