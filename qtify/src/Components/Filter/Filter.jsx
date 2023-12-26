import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Filter.module.css';

export default function Filter({filter,selectedFilterIndex, setSelectedFilterIndex}) {
  debugger;
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{style :{ backgroundColor: 'var(--color-primary)'}}}>
          {filter && filter.map((element,index) => (
              <Tab key={element.key} className={styles.tab} label={element.label} {...a11yProps(index)} />
          ))}
      </Tabs>
    </>
  );
}