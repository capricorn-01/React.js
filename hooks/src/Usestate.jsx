import { useState } from "react"
function Usestate() {

    let [content, setcontent] = useState('');
    let [btndata, setbtndata] = useState('');

    function gettext(e) {
        setcontent(e.target.value)
    }

    function btn() {
        setbtndata(content)
    }

    return (
        <>
            <h1>{btndata}</h1>
            <input type="text" onChange={gettext} />
            <button onClick={btn}>submit</button>
        </>
    )
}

export default Usestate