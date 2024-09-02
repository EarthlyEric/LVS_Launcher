import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faSquare } from '@fortawesome/free-solid-svg-icons'
import { IpcRenderer, ipcRenderer } from 'electron';

function TitleBar(){
    function handleExit(){
       ipcRenderer.emit('windowsStates','')
    }
    return (
        <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-1">
            <div className="flex items-center">
                <img src="/images/logo.png" width={32} height={32} alt="Logo" className="mr-4" />
                <div className="font-bold">LVS Launcher</div>
            </div>
            <div className="flex items-center space-x-2">
                <button className="rounded px-4 py-2 hover:bg-gray-800"><FontAwesomeIcon icon={faSquare} /></button>
                <button className="rounded px-4 py-2 hover:bg-gray-800"><FontAwesomeIcon icon={faSquare} /></button>
                <button className="rounded px-4 py-2 hover:bg-gray-800" onClick={handleExit}><FontAwesomeIcon icon={faX} /></button>
            </div>
        </div>
    );
}

export default TitleBar;