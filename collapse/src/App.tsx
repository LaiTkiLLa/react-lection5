import React from 'react';
import './App.css';
import {Collapse} from "./components/collapse.component";
import {Content} from "./components/content.component";

function App() {
    return (
    <>
        <Collapse collapsedLabel='Развернуть'
        expandedLabel='Свернуть'
        isExpanded={false}
        >
            <Content>
                Текст №1
            </Content>
        </Collapse>
        <Collapse collapsedLabel='Развернуть'
                  expandedLabel='Свернуть'
                  isExpanded={true}
        >
            <Content>
                Текст №2
            </Content>
        </Collapse>
    </>
  );
}

export default App;
