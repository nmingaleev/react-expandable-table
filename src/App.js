import './App.css';

import { ExpandableTable } from './expandableTable';
import { MovieDescription } from './movieDescription';

import { data } from './data';

function App() {
  const columns = [
    {
      title: 'Title',
      renderCell: (item) => item.title,
    },
    {
      title: 'Director',
      renderCell: (item) => item.director,
    }
  ];

  const renderExpandedRow = (item) => {
    return (
      <MovieDescription
        img={item.img}
        alt={item.title} 
        description={item.description}
      />
    );
  }

  return (
    <div className="App">
      <ExpandableTable
        columns={columns}
        items={data}
        renderExpandedRow={renderExpandedRow}
      />
    </div>
  );
}

export default App;
