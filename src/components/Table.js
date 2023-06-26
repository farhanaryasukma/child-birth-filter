export default function Table( {user} ) {
  return (
    <table className="text-center text-sm  border-collapse table-auto overflow-hidden border border-slate-500 mx-1">
      <thead>
        <tr>
          <th className="border border-slate-600">Mother ID</th>
          <th className="border border-slate-600">Mother Name</th>
          <th className="border border-slate-600">Mother Age</th>
          <th className="border border-slate-600">Baby ID</th>
          <th className="border border-slate-600">Condition</th>
          <th className="border border-slate-600">Gestational Age</th>
          <th className="border border-slate-600">Gender</th>
          <th className="border border-slate-600">Birth Method</th>
          <th className="border border-slate-600">Length</th>
          <th className="border border-slate-600">Weight</th>
          <th className="border border-slate-600">Date and Time of Birth</th>
        </tr>
      </thead>
      <tbody>
      {user.map((item) => (
          <tr key={item.id}>
            <td className="border border-slate-600">{item.id}</td>
            <td className="border border-slate-600">{item.namaIbu}</td>
            <td className="border border-slate-600">{item.usiaIbu}</td>
            <td className="border border-slate-600">{item.Babies[0].id}</td>
            <td className="border border-slate-600">{item.Babies[0].condition}</td>
            <td className="border border-slate-600">{item.Babies[0].gestationalAge}</td>
            <td className="border border-slate-600">{item.Babies[0].gender}</td>
            <td className="border border-slate-600">{item.Babies[0].birthMethod}</td>
            <td className="border border-slate-600">{item.Babies[0].length}</td>
            <td className="border border-slate-600">{item.Babies[0].weight}</td>
            <td className="border border-slate-600">{item.Babies[0].dateAndTimeOfBirth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
