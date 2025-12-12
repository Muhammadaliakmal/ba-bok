
import React from 'react';
import MasterContainer from '@site/src/components/MasterContainer';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <MasterContainer colorPrimary="#3b82f6">
            {children}
        </MasterContainer>
    );
}
