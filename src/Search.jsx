import { useState } from "react"
import { TaskList } from './TaskList'

export const Search = ({ dataList }) => {
    const [searchText, updateSearchText] = useState("");

    function handleChange(e) {
        updateSearchText(e.target.value);   
    }

    return (
        <div>
            <label htmlFor="search">Search</label>
            <input onChange={(e) => handleChange(e)} value={searchText} 
            placeholder="Search" type="text" id="search"/>
            <h2>Task List</h2>
            <TaskList tasksToRender={dataList} searchText={searchText}/>
        </div>
    )
}
