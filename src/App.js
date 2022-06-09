import React, { useState } from 'react';
import './style.css';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

export default function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </>
  );
}
