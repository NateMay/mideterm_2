import { useState } from "react";

export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem() {

    const initial = localStorage.getItem('clickCount') || 0
    
    const [value, setValue] = useState(parseInt(initial));

    function addClick() {
        const newValue = value + 1
        setValue(newValue)
        localStorage.setItem('clickCount', newValue)
    }
    function reset() {
        setValue(0)
        localStorage.removeItem('clickCount')
    }

    return <div className="btn-group">
        <button className="btn btn-primary" onClick={addClick}>Clicked {value} time{ value !== 1 ? 's': ''}</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
    </div>;
    ;
}
