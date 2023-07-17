import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'earlybot ─ developer';
	const description = "Hey 👋 I'm earlybot, a developer";

	return {
		title,
		description,
		canonical: `https://earlybot.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'earlybot',
			url: `https://earlybot.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://earlybot.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
