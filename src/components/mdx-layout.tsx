export default function MdxLayout({ children }: { children: React.ReactNode }) {
	// Create any shared layout or styles here
	return (
		<div className="prose text-muted-foreground prose-headings:text-foreground prose-xl prose-pre:border  ">
			{children}
		</div>
	);
}
