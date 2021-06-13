import React from "react";
import cx from "classnames";
import { useDispatch, useSelector} from "react-redux";
import { setFilter } from "../../Redux/actions";
import { v4 as uuidv4 } from "uuid";
import { FiltersList, FilterItem, FilterButton } from "./Filter.styles";
import {Data} from "../../constants/data";

export const Filter = () => {
  const filter_type = useSelector(state => state.filterState.filter_type);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { name } = e.target;

    dispatch(setFilter(name));
  }

  return (
    <FiltersList className="filters">
      {Object.keys(Data).map((filterType) => (
        <FilterItem key={uuidv4()}>
          <FilterButton
            type="button"
            className={cx({ selected: filterType === filter_type })}
            name={filterType}
            onClick={(e) => handleClick(e)}
          >
            {filterType}
          </FilterButton>
        </FilterItem>
      ))}
    </FiltersList>
  );
};
