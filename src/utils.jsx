import { useEffect, useState, memo } from "react";

const LoadImage = memo(
	({ src, alt = "", className = "", delay = 0, loading_src = "assets/loading.gif" }) => {
		const [currentSrc, updateSrc] = useState(loading_src);
		useEffect(() => {
			const img = new Image();
			img.src = src;
			img.onload = () => setTimeout(() => updateSrc(src), delay);
		}, [src, delay]);
		return <img src={currentSrc} alt={alt} className={className} />;
	}
);

const randomint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { LoadImage, randomint };
