export default function Icon({ name, size = 24, className, ...props }) {
	return (
		<svg width={size} height={size} className={className} {...props}>
			<use href={`/sprite.svg#${name}`} />
		</svg>
	);
}
