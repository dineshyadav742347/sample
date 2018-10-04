import React, { Component } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

class Map extends Component {

	infoboxClickHandler(){
		console.log("infoboxClickHandler");
	}
	pushPinClickHandler(){
		console.log("pushPinClickHandler");
	}
	AddPushPinOnClick(location) {
		console.log('Hi dinesh', location);
	}
	render() {
		return (
			<div>
			<ReactBingmaps 
	    	bingmapKey = "AvOiEYvw2LQvK-XEvZ3BbY1VZE2Szc2pzTtzqEogKBIbMvlpIMOPfEaKREXQb1_p" 
	  		center = {[13.0827, 80.2707]}
	  		infoboxesWithPushPins = {[
            {
              "location":[13.0827, 80.2707],
              "addHandler":"click",
              "infoboxOption": { title: 'User1', description: 'From Chennai' },
              "pushPinOption":{ title: 'Here1', description: '' },
              "infoboxAddHandler": {"type" : "click", callback: this.infoboxClickHandler },
              "pushPinAddHandler": {"type" : "click", callback: this.pushPinClickHandler }
            },
            {
              "location":[13.0301, 80.2174], 
              "addHandler":"click",
              "infoboxOption": { title: 'User2', description: 'From Andur' },
              "pushPinOption":{ title: 'Here2', description: '' },
              "infoboxAddHandler": {"type" : "click", callback: this.infoboxClickHandler },
              "pushPinAddHandler": {"type" : "click", callback: this.pushPinClickHandler }
            }
            ]}
            getLocation = {{addHandler: "click", callback: this.AddPushPinOnClick}}
	  		>
	  		</ReactBingmaps>
  		</div>
    );
  }
}

export default Map;