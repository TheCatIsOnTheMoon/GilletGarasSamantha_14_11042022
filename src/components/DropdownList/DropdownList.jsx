function DropdownList({ list, listId }) {
  return (
    <select name={listId} id={listId}>
      {list.map((item, index) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default DropdownList;
