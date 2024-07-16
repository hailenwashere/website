import { useState } from 'preact/hooks';

const Greeting = ({messages}) => {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]
    const [greeting, setGreeting] = useState(messages[0])

    return (
        <div>
            <h3>{greeting}!  Thanks for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>new greeting</button>
        </div>
    );
}
 
export default Greeting;