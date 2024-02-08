import { useState, useId } from "react"
import "../Styles/Filters.css";
import { useFilters } from "../Hooks/useFilters.js";

export const Filters = () =>
{
    const {filters, setFilters} = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) =>
    {
        setFilters(prevState => ({...prevState,minPrice:event.target.value}));
    }

    const handleChangeCategory = (event) =>
    {
        setFilters(prevState => ({...prevState,category:event.target.value}));
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor="price">Price</label>

                <input 
                    type="range" 
                    id={minPriceFilterId} 
                    min="0" 
                    max="1000"
                    value={filters.minPrice} 
                    onChange={handleChangeMinPrice}
                />

                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categories</label>
                <select 
                    id={categoryFilterId} 
                    onChange={handleChangeCategory}
                >
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}