"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trackPhoneConversion, trackEmailConversion } from "@/lib/conversion-tracking";
import { Phone, Mail } from "lucide-react";

export default function TestConversion() {
  const handleTestConversion = () => {
    console.log("Testing conversion tracking...");
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      console.log("gtag_report_conversion function is available");
      window.gtag_report_conversion();
    } else {
      console.log("gtag_report_conversion function is NOT available");
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Conversion Tracking Test Page</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Phone Conversion Test</h2>
              <Button
                onClick={() => trackPhoneConversion("4049429222")}
                className="w-full mb-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Test Phone Conversion
              </Button>
              <p className="text-sm text-muted-foreground">
                Click this button to test phone call conversion tracking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Email Conversion Test</h2>
              <Button
                onClick={() => trackEmailConversion("azrautorepair@gmail.com")}
                className="w-full mb-4"
                variant="outline"
              >
                <Mail className="w-4 h-4 mr-2" />
                Test Email Conversion
              </Button>
              <p className="text-sm text-muted-foreground">
                Click this button to test email conversion tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Raw Conversion Test</h2>
              <Button
                onClick={handleTestConversion}
                className="w-full mb-4"
                variant="secondary"
              >
                Test Raw gtag_report_conversion
              </Button>
              <p className="text-sm text-muted-foreground">
                Click this button to test the raw conversion function. Check the browser console for logs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Testing Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Open your browser's Developer Tools (F12)</li>
                <li>Go to the Network tab</li>
                <li>Click any of the test buttons above</li>
                <li>Look for requests to googletagmanager.com or google-analytics.com</li>
                <li>Check the Console tab for any error messages</li>
                <li>Verify that the conversion events are being sent to Google Ads</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
