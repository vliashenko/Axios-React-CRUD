import React from 'react';
import MaterialListItem from '../MaterialListItem/MaterialListItem';
import styled from "styled-components";

const Item = styled.li`
    margin:5px 0;
    padding: 10px;
    border: 0.5px solid #e8e8e8;
`;

const MaterialsList = ({ items, ...otherProps }) => {
    return (
        <ul>
            {items.map(item => {
                const { id } = item;
                return (
                    <Item key={ id }>
                       <MaterialListItem
                        {...item}
                        {...otherProps}
                       />
                    </Item>
                )
            })}
        </ul>
    );
};

export default MaterialsList;