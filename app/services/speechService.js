/**
 * Created by User on 7/5/2017.
 */
import $ from 'jquery';
const events = [];
let speekObj;

export const onHover = (elementDesc) => {
  return function(event) {
    event.persist();
    event.stopPropagation();
    console.log($(event.target))
    if(elementDesc) {
      event.elementDesc = elementDesc;
    }
    events.push(event);
    if (events.length > 3) {
      events.splice(0, events.length - 2);
    }
    if (!speekObj) {
      speekObj = new SpeekConstructor();
    }
    if (!speekObj.isSpeaking()) {
      const ev = events[events.length - 1];
      let resultString = getStringToSpeak(ev);
      speekObj.speak(resultString);
    }
  };
};

function SpeekConstructor() {
  const synth = window.speechSynthesis;

  this.isSpeaking = () => {
    return synth.speaking;
  };

  this.speak = (text) => {
    const utterThis = new window.SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
    utterThis.onend = (event) => {
      const ev = events[events.length - 1];
      let resultString = getStringToSpeak(ev);
      if(resultString !== event.currentTarget.text) {
        this.speak(resultString);
      }
    };
  };
}

function getStringToSpeak(event) {
  let resultString;
  if (event.elementDesc) {
    resultString = event.elementDesc.type + '. ';
  }

  let text = $(event.target).text();
  if(!text) {
    text = $(event.target).next().text();
  }
  if (text) {
    if(!resultString) {
      resultString = text;
    } else {
      resultString +=text;
    }
  }

  return resultString;
}
