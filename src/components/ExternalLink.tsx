import type { ReactNode } from 'react'

export type ExternalLinkProps = {
  children: ReactNode
  href: string
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-blue-200 hover:text-brand-blue-400">
      {children}
    </a>
  )
}
