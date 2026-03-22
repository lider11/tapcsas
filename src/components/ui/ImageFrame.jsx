import { cn } from '../../lib/cn'

function ImageFrame({ src, alt, caption, className }) {
  return (
    <figure className={cn('overflow-hidden rounded-2xl border border-white/20 bg-white/10', className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      {caption ? <figcaption className="border-t border-white/20 px-4 py-2 text-xs text-primary-100">{caption}</figcaption> : null}
    </figure>
  )
}

export default ImageFrame
