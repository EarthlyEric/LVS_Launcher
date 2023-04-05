import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {}
import { ipcRenderer } from 'electron';

function TitleBar(){
    function handleExit(){
        ipcRenderer.send('exit')
    }
    return (
        <div className="bg-gray-900 text-white flex justify-between items-center px-4 py-1">
            <div className="mr-4">
                <img src="/images/logo.png" width={32} height={32} alt="Logo" />
            </div>
            <div className="font-bold">LVS Launcher</div>
            <div className="flex space-x-2">
                <button className="rounded px-4 py-2 hover:bg-gray-800">_</button>
                <button className="rounded px-4 py-2 hover:bg-gray-800">[]</button>
                <button className="rounded px-4 py-2 hover:bg-gray-800" onClick={handleExit}>
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                </button>
            </div>
        </div>
    );
}

export default TitleBar;