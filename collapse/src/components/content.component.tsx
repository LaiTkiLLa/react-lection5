import React from 'react';

interface Content {
    children: React.ReactNode
}


export const Content: React.FC<Content> = ({children}) => {
    return (
        <p>
            {children}
        </p>
    )
}