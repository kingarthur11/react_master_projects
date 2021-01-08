import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data'

const App = () => {
    const [menuItem, setMenuItems] = useState(items);
    const [Categories, setCategories] = useState([])

    const filterItems = (category) => {
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <div>
            <h3>menu projects setup</h3>
            <Categories filterItems={filterItems} />
            <Menu items={menuItem}/>
        </div>
    )
}

export default App
