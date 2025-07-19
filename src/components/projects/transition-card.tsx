// components/TransitionedBrowser.tsx

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

type Props = {
	href: string;
	transitionName: string;
	children?: React.ReactNode;
};

export default function TransitionCard({
	href,
	transitionName,
	children,
}: Props) {
	return (
		<ViewTransition name={transitionName}>
			<Link href={href}>{children}</Link>
		</ViewTransition>
	);
}
