import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import clickSound from './sounds/click.mp3'
import React from "react";
import { useState, useEffect } from "react";
import { FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
import Sound from 'react-sound';
const Timer = (props) => {
    const { initialMinute = 0, initialSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [started, setStarted] = useState(false);
    const [soundStarted, setSoundStarted] = useState(Sound.status.PLAYING);
    useEffect(() => {
        if (started) {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);

            return () => {
                clearInterval(myInterval);
            };
        }
    });

    const play = () => {
        setSoundStarted(Sound.status.PLAYING)
        setStarted(!started);
        setTimeout(() => setSoundStarted(Sound.status.STOPPED), 500)
    };
    const reset = () => {

        setSoundStarted(Sound.status.PLAYING)
        setMinutes(initialMinute)
        setSeconds(initialSeconds)
        setTimeout(() => setSoundStarted(Sound.status.STOPPED), 500)

    };

    return (



        <Flex align="center" justify="center" flexDirection="column">
            <div>

                <Editable value={minutes} onChange={value => setMinutes(value)}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
                <div className="chakra-editable">:</div>
                <Editable size="6xl" variant="heading" onChange={value => setSeconds(value)} value={seconds < 10 ? `0${seconds}` : seconds}>
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </div>

            <br />
            <div>

                <Button size="lg" colorScheme="teal" variant="solid" onClick={play}>
                    {started ? <FiPause /> : <FiPlay />}
                </Button>
                <Button size="lg" colorScheme="teal" variant="outline" onClick={reset}>
                    <FiRotateCcw />
                </Button>
            </div>

            <Sound
                url={clickSound}
                playStatus={soundStarted}
                volume={100}
                loop={false}
            />
        </Flex>
    );
};

export default Timer;
