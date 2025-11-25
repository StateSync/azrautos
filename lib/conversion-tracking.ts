/**
 * Google Ads Conversion Tracking Utilities
 */

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

/**
 * Track a conversion event for Google Ads
 * @param url - Optional URL to redirect to after tracking
 * @returns false to prevent default link behavior
 */
export const trackConversion = (url?: string): boolean => {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    return window.gtag_report_conversion(url);
  }
  
  // Fallback: if tracking is not available, proceed with the action
  if (url) {
    window.location.href = url;
  }
  return false;
};

/**
 * Create a click handler that tracks conversions
 * @param url - URL to navigate to after tracking
 * @returns Click handler function
 */
export const createConversionHandler = (url: string) => {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    trackConversion(url);
  };
};

/**
 * Track phone call conversions
 * @param phoneNumber - Phone number being called
 */
export const trackPhoneConversion = (phoneNumber: string) => {
  trackConversion(`tel:${phoneNumber}`);
};

/**
 * Track email conversions
 * @param email - Email address being contacted
 */
export const trackEmailConversion = (email: string) => {
  trackConversion(`mailto:${email}`);
};
