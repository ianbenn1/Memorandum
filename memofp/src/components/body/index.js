import React from 'react';
import { getNote, updateNote } from '/services/services';
import './style.css';

export default class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sendSave: false}
    }
    componentDidMount() {

        //let saveInterval = setInterval(saveTimer, 2500);

        document.querySelector(".main-text-content").addEventListener("input", e => {
            document.querySelector(".SaveState").textContent = "Saving...";
            console.log(e.target.value);
            if(this.state.sendSave === false)
            {
                this.setState({sendSave: true});
                this.saveTimer();
            }
            
        });

    }

    saveTimer = async () => {
        
        let savestate = false;
        await sleep(200);
        //savestate = true;
        ////mock the save
        // if (Math.floor((Math.random() * 10) + 1) === 10)
        // {
        //     savestate = false;
        // }
        // else {
        //     savestate = true;
        // }

        //Save note content

        const response = await fetch(`/api/savenote`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({note: document.querySelector(".main-text-content").textContent})
          })
        savestate = await response.json();
        
        if(savestate)
        {
            document.querySelector(".SaveState").textContent = "Saved.";
            this.setState({sendSave: false});
            console.log("SAVED");
        }
        else {
            document.querySelector(".SaveState").textContent = "ERROR SAVING";
            console.log("FAILED");
            this.setState({sendSave: false});
        }
    }

    render(){
        return (
            <div className="main-content">
                <textarea className="main-text-content"></textarea>
            </div>
        );
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }