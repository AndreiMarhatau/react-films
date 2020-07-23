import React from 'react';
import HelloWorld from '../../components/HelloWorld.jsx/HelloWorld';
import ClassComponent from '../../components/ClassComponent/ClassComponent';
import CreateElement from '../../components/CreateElement/CreateElement';
import FunctionalComponent from '../../components/FunctionalComponent/FunctionalComponent';
import PureClassComponent from '../../components/PureClassComponent/PureClassComponent';

const MainContainer = () => {
    return <>
        <HelloWorld/>
        <ClassComponent/>
        <CreateElement/>
        <FunctionalComponent/>
        <PureClassComponent/>
    </>;
}

export default MainContainer;