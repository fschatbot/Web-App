import { useEffect, useState, memo } from "react";

const LoadImage = memo(
	({ src, alt = "", className = "", delay = 0, loading_src = "loading.gif" }) => {
		const [currentSrc, updateSrc] = useState(loading_src);
		useEffect(() => {
			const img = new Image();
			img.src = src;
			img.onload = () => setTimeout(() => updateSrc(src), delay);
		}, [src, delay]);
		return <img src={currentSrc} alt={alt} className={className} />;
	}
);

export { LoadImage };
