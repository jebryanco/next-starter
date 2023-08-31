import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function IndexPage() {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          <Balancer>
            A starter app built using Next.js 13 server components.
          </Balancer>
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Plus TRPC, T3 Env, Tailwind, Shadcn UI, and Lucide Icons. Utilizing
          the edge runtime.
        </p>
        <div className='space-x-4'>
          <Link href='#' className={cn(buttonVariants({ size: 'lg' }))}>
            Get Started
          </Link>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
