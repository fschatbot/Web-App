import { useEffect, useState, memo, createContext } from "react";

const LoadImage = memo(({ src, alt = "", className = "", delay = 0, loading_src = "assets/loading.gif" }) => {
	const [currentSrc, updateSrc] = useState(loading_src);
	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => setTimeout(() => updateSrc(src), delay);
	}, [src, delay]);
	return <img src={currentSrc} alt={alt} className={className} />;
});

const randomint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function Link({ href, children, props }) {
	return (
		<a href={href} target="_blank" rel="noreferrer" {...props}>
			{children}
		</a>
	);
}

export const EasterEggContext = createContext();
export { LoadImage, randomint, Link };
