export const TaskList = ({ tasksToRender, searchText }) => {
  const filteredTasks = tasksToRender.filter(task => {
    return task.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <ul>
      {filteredTasks.map((task, id) => (
        <li key={id}>{task.name}</li>
      ))}
    </ul>
  );
}
