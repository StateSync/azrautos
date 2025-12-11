import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AZR Auto Repair - Mobile Mechanics | Car Repair at Your Location',
  description: 'Professional mobile auto repair services at your home or office. Expert mechanics for oil changes, brake repair, diagnostics, and more. Call (404) 942-9222 for same-day service.',
  keywords: 'mobile mechanic, auto repair, car repair, oil change, brake repair, automotive service, mobile car repair, mechanic near me, car diagnostics, vehicle maintenance',
  authors: [{ name: 'AZR Auto Repair' }],
  creator: 'AZR Auto Repair',
  publisher: 'AZR Auto Repair',
  robots: 'index, follow',
  openGraph: {
    title: 'AZR Auto Repair - Mobile Mechanics | Car Repair at Your Location',
    description: 'Professional mobile auto repair services at your home or office. Expert mechanics for oil changes, brake repair, diagnostics, and more.',
    url: 'https://azrautorepair.com',
    siteName: 'AZR Auto Repair',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'AZR Auto Repair - Mobile Mechanics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZR Auto Repair - Mobile Mechanics | Car Repair at Your Location',
    description: 'Professional mobile auto repair services at your home or office. Expert mechanics for oil changes, brake repair, diagnostics, and more.',
    images: ['/placeholder-logo.png'],
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  other: {
    'business:contact_data:phone_number': '(404) 942-9222',
    'business:contact_data:email': 'azrautorepair@gmail.com',
    'business:contact_data:locality': 'Atlanta',
    'business:contact_data:region': 'Georgia',
    'business:contact_data:country_name': 'United States',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17079463054"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17079463054');
          `}
        </Script>
        
        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17079463054/eYh1CKvn3coaEI7Zj9A_',
                'event_callback': callback
              });
              return false;
            }
            
            // Make function available globally
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
