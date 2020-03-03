import React, { CSSProperties } from 'react';
import NavigationItem from './navigationItem';

/** React function component */
export default function MasterView() {
    const detailViews = ['forest', 'sky', 'desert'];

    return (
        <div style={container}>
            {detailViews.map((value) => <NavigationItem key={value} id={value} />)}
        </div>
    );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}