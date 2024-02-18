//App.jsx
"use client"
import { useEffect, useRef, useState } from "react";

const DraggableDiv = () => {
	const divRef = useRef(null);
    const [currentDiv, setCurrentDiv] = useState({});
	useEffect(() => {
		const elmnt = divRef.current;
		let pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;

		const dragMouseDown = (e) => {
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = onMouseUp;
			document.onmousemove = elementDrag;
		};

		const elementDrag = (e) => {
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
			elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
		};
		const onMouseUp = () => {
			document.onmouseup = null;
			document.onmousemove = null;
            setCurrentDiv({
                top: `${elmnt.offsetTop - pos2}px`,
                left: `${elmnt.offsetLeft - pos1}px`,
                width: `${elmnt.offsetWidth}px`,
                height: `${elmnt.offsetHeight}px`,
            })
		};

		if (elmnt) {
			elmnt.onmousedown = dragMouseDown;
		}

		return () => {
			if (elmnt) {
				elmnt.onmousedown = null;
			}
			document.onmouseup = null;
			document.onmousemove = null;
		};
	}, []);
    console.log(currentDiv)

	return (
		<div
			draggable="true"
			className=" cursor-move fixed bg-slate-400"
			id="mydiv"
			ref={divRef}
		>
			{/* Content goes here */}
			some dataadsasd
		</div>
	);
};

export default function Home() {
	return (
		<div>
			<DraggableDiv />
		</div>
	);
}
