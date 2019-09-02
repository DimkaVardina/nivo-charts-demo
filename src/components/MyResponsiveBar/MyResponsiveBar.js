import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import './MyResponsiveBar.css';

const MyResponsiveBar = ({ data }) => {
  return (
    <div className="responsive-bar-wrapper">
      <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0}
        colors={['#80b4cc', '#44beba', '#f56b5d', '#7d68a5', '#279ed6', '#bc00b6']}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        enableGridX={true}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
  </div>);
}

export default MyResponsiveBar;
