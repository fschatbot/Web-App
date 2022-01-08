import { useEffect, useState, memo } from "react";

const LoadImage = memo(({ src, alt = "", className = "" }) => {
	const [currentSrc, updateSrc] = useState("assets/loading.gif");
	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => updateSrc(src);
	}, [src]);
	return <img src={currentSrc} alt={alt} className={className} />;
});

export { LoadImage };
