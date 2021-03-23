import React, { useState } from 'react';
import './App.scss';
import Table from './components/Table';
import CreateModel from './components/CreateModal';
import { EditModal } from './components/EditModal';

function App() {
    return (
        <div className="app">
            <h1>hello typescript template</h1>
            <Table />
            <CreateModel />
            <EditModal />
        </div>
    );
}

export default App;
