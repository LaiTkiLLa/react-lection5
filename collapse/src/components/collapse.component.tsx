import React, {useState} from 'react';

interface MyComponentProps {
    children: React.ReactNode,
    collapsedLabel: 'Развернуть',
    expandedLabel: 'Свернуть',
    isExpanded: boolean
}

export const Collapse: React.FC<MyComponentProps> = ({children, collapsedLabel, expandedLabel, isExpanded}) => {
    const [expanded, setExpanded] = useState(isExpanded)
    const handleClick = () => {
        setExpanded((expanded: boolean) => !expanded)
    }
    return (
            <div>
                <button className='btn btn-primary' type='button' aria-expanded="false"
                        onClick={handleClick}>{expanded ? expandedLabel : collapsedLabel}</button>
                {expanded && children}
            </div>
    )
};

Collapse.defaultProps = {
    expandedLabel: 'Свернуть'
}

