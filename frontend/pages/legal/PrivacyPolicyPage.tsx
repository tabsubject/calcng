import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PrivacyPolicyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy for CalcNG</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose max-w-none space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              CalcNG is a free automotive calculator application that performs calculations locally in your browser. 
              We do not collect, store, or process any personal information from our users. All calculations are 
              performed entirely on your device without any data transmission to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. How We Use Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Since we do not collect personal information, we do not use, share, or sell any personal data. 
              The calculator inputs you provide are processed locally in your browser and are never transmitted 
              to our servers or any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use essential cookies for basic functionality such as remembering your preferences. 
              We may also use Google Analytics to understand how visitors interact with our site to improve user experience. 
              You can disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party services such as Google AdSense to display relevant advertisements. 
              These services may collect information about your visits to this and other websites to provide 
              personalized ads. Please refer to their respective privacy policies for more information about 
              their data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Since we do not collect or store personal information on our servers, there is no personal data 
              at risk of breach. All calculations are performed locally in your browser and are not transmitted 
              to our servers, ensuring complete privacy and security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service is not specifically directed to children under 13. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us and we will take 
              appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time to reflect changes in our practices or 
              for legal and regulatory reasons. We will notify you of any material changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact 
              us through our website. We are committed to addressing any concerns you may have about your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Google AdSense</h2>
            <p className="text-gray-700 leading-relaxed">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies 
              to serve ads based on your prior visits to our website or other websites. You may opt out of 
              personalized advertising by visiting Google's Ads Settings at www.google.com/settings/ads. 
              Alternatively, you can opt out of third-party vendor cookies for personalized advertising by 
              visiting www.aboutads.info.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use Google Analytics to analyze how visitors use our website. Google Analytics collects 
              information such as how often users visit the site, what pages they visit, and what other sites 
              they used prior to coming to this site. We use this information only to improve our website and 
              user experience. Google Analytics collects only the IP address assigned to you on the date you 
              visit this site, rather than your name or other identifying information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              Since we do not collect personal data, there is no personal information to access, modify, or delete. 
              However, you have the right to disable cookies in your browser and opt out of analytics tracking 
              if you prefer not to share usage data with third-party services.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
