export default function Table( {user} ) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Mother ID</th>
          <th>Mother Name</th>
          <th>Mother Age</th>
          <th>Baby ID</th>
          <th>Condition</th>
          <th>Gestational Age</th>
          <th>Gender</th>
          <th>Birth Method</th>
          <th>Length</th>
          <th>Weight</th>
          <th>Date and Time of Birth</th>
        </tr>
      </thead>
      <tbody>
      {user.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.namaIbu}</td>
            <td>{item.usiaIbu}</td>
            <td>{item.Babies[0].id}</td>
            <td>{item.Babies[0].condition}</td>
            <td>{item.Babies[0].gestationalAge}</td>
            <td>{item.Babies[0].gender}</td>
            <td>{item.Babies[0].birthMethod}</td>
            <td>{item.Babies[0].length}</td>
            <td>{item.Babies[0].weight}</td>
            <td>{item.Babies[0].dateAndTimeOfBirth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
