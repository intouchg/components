// Prior art: https://github.com/rebassjs/rebass/blob/master/packages/space/src/index.js
import { Children, cloneElement, isValidElement } from 'react'

const classnames = (child: any, className: string) =>
	child.props && child.props.className
		? className + ' ' + child.props.className
		: className

export const Apply = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	const styledChildren = Children.toArray(children).map((child) => {
		if (isValidElement(child))
			return cloneElement(child, {
				className: classnames(child, className as string),
			})

		return child
	})
	return <>{styledChildren}</>
}
