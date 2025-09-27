export default function MdxLayout({ children }: { children: React.ReactNode }) {
	// Create any shared layout or styles here
	return (
		<div className="prose prose-code:text-muted-foreground prose-hr:border-border text-muted-foreground prose-headings:text-foreground prose-h1:font-heading uppercase prose-h1:text-8xl prose-strong:text-foreground  prose-xl prose-pre:border prose-blockquote:text-muted-foreground ">
			{children}
		</div>
	);
}
