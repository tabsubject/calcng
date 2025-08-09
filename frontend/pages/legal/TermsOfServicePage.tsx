import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function TermsOfServicePage() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Terms of Service for CalcNG</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose max-w-none space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using CalcNG (calc.com.ng), you accept and agree to be bound by the terms 
              and provisions of this agreement. If you do not agree to abide by the above, please do not 
              use this service. These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              CalcNG is a web-based automotive calculator suite that provides various calculations related to 
              engines, fuel economy, electric vehicles, unit conversions, loans, and tire specifications. 
              The service is provided free of charge for personal, educational, and professional use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Accuracy of Calculations</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide accurate calculations using industry-standard formulas, CalcNG is 
              provided "as is" without any warranties of accuracy or completeness. The calculations are for 
              informational purposes only and should not be used as the sole basis for important decisions. 
              Always verify calculations with professional sources when accuracy is critical for safety, 
              performance, or financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li>Using the service in accordance with these terms and applicable laws</li>
              <li>Ensuring the accuracy of input data and parameters</li>
              <li>Verifying calculation results when accuracy is important</li>
              <li>Not using the service for any illegal or unauthorized purpose</li>
              <li>Not attempting to interfere with or disrupt the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              The content, organization, graphics, design, compilation, and other matters related to CalcNG 
              are protected under applicable copyrights, trademarks, and other proprietary rights. The 
              copying, redistribution, use, or publication by you of any such matters or any part of this 
              site is strictly prohibited without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall CalcNG, its operators, or affiliates be liable for any damages including, 
              without limitation, indirect or consequential damages, or any damages whatsoever arising from 
              use or loss of use, data, or profits, whether in action of contract, negligence, or other 
              tortious action, arising out of or in connection with the use of this service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              CalcNG is provided on an "as is" and "as available" basis without any warranties of any kind. 
              We disclaim all warranties, express or implied, including but not limited to implied warranties 
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Modifications to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the service or any part thereof at any 
              time without notice. We shall not be liable to you or any third party for any modification, 
              suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising from these terms or the use 
              of this service shall be subject to the jurisdiction of competent courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to change these terms at any time without prior notice. Your continued 
              use of CalcNG following any changes constitutes your acceptance of the new terms. We recommend 
              reviewing these terms periodically for any updates.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these terms is found to be unenforceable or invalid, that provision shall 
              be limited or eliminated to the minimum extent necessary so that these terms shall otherwise 
              remain in full force and effect and enforceable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website. 
              We are committed to addressing any concerns or questions you may have about these terms.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
