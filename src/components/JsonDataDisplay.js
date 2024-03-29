import JsonData from '../data/mainData.json';
//import JsonData from '../data/qaData.json';

function JsonDataDisplay() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.label}</td>
        <td>{info.completed}</td>
        <td>{info.cohort}</td>
        <td>{info.overlaps}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th>Month</th>
            <th>Average Completed</th>
            <th>Average Number in Cohort</th>
            <th>Overlaps Completed</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
